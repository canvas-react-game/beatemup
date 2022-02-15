import { NextFunction, Request, Response } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { StaticRouterContext } from "react-router";
import { Provider } from "react-redux";
import configureStore from "@/store/store";
import Helmet from "react-helmet";
import { makeHTMLPage } from "./utils";
import App from "../components/App";

/* @ts-ignore */
import rateLimit from "express-rate-limit";

const store = configureStore();

const serverRenderMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const location = req.url;
    const context: StaticRouterContext = {};
    console.log("location: ", location)
    console.log("coockies: ", req.headers.cookie)

    const jsx = (
        <Provider store={store}>
            <StaticRouter context={context} location={location}>
                <App />
            </StaticRouter>
        </Provider>
    );
    const reactHtml = renderToString(jsx);
    const reduxState = store.getState();
    const helmetData = Helmet.renderStatic();

    if (context.url) {
        res.redirect(context.url);
        return;
    }

    res.status(context.statusCode || 200).send(
        makeHTMLPage(reactHtml, reduxState, helmetData)
    );
};

// NOTE: Базовая защита от DDOS
const limiterMiddleware = rateLimit({
    windowMs: 20 * 60 * 1000,
    max: 100,
});

export { serverRenderMiddleware, limiterMiddleware };
