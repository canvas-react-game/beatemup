import { NextFunction, Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { root, base } from "@/services/API/API.service";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { StaticRouterContext } from "react-router";
import { Provider } from "react-redux";
import configureStore from "@/store/store";
import Helmet from "react-helmet";
import { makeHTMLPage } from "./utils";
import App from "../components/App";
import {
    signInSuccess,
    signInOAuthSuccess,
    signOutSuccess,
} from "@/actions/auth.actions";

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

    if (req.cookies.isSignedIn == "true") {
        store.dispatch(signInSuccess());
    } else if (req.cookies.setSignedInOAuth == "true") {
        store.dispatch(signInOAuthSuccess());
    } else {
        store.dispatch(signOutSuccess());
    }

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

    // TODO: если отдавать 304 ридерект, то ломаются service-workers, надо подумать что с этим сделать
    res.status(200).send(makeHTMLPage(reactHtml, reduxState, helmetData));

    next();
};

// NOTE: Базовая защита от DDOS
const limiterMiddleware = rateLimit({
    windowMs: 20 * 60 * 1000,
    max: 100,
});

const apiProxy = createProxyMiddleware(base, {
    target: root,
    changeOrigin: true,
    cookieDomainRewrite: "localhost",
});

export { serverRenderMiddleware, limiterMiddleware, apiProxy };
