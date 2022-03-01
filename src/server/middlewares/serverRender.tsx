import { NextFunction, Request, Response } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Helmet from "react-helmet";
import configureStore from "@/store/store";
import { makeHTMLPage } from "../utils/makeHTMLPage";
import App from "../../components/App";
import {
    signInSuccess,
    signInOAuthSuccess,
    signOutSuccess,
} from "@/actions/auth.actions";

const store = configureStore();

export const serverRenderMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const location = req.url;
    const hostUrl = `${req.protocol}://${req.get("Host")}`;

    if (req.cookies.isSignedIn === "true") {
        store.dispatch(signInSuccess());
    } else if (req.cookies.setSignedInOAuth === "true") {
        store.dispatch(signInOAuthSuccess());
    } else {
        store.dispatch(signOutSuccess());
    }

    const jsx = (
        <Provider store={store}>
            <StaticRouter location={location}>
                <App />
            </StaticRouter>
        </Provider>
    );
    const reactHtml = renderToString(jsx);
    const reduxState = store.getState();
    const helmetData = Helmet.renderStatic();

    // TODO: если отдавать 304 ридерект,
    // то ломаются service-workers, надо подумать что с этим сделать
    res.status(200).send(
        makeHTMLPage(hostUrl, reactHtml, helmetData, reduxState),
    );

    res.end();
};
