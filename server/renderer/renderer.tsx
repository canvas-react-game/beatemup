import React from 'react';
import {renderToStaticMarkup, renderToString} from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import {Request, Response} from 'express';

import configureStore from "../../src/store"
import App from "../../src/App"
import { StaticRouterContext } from 'react-router';

interface RedirectData {
    redirectUrl: string
}

export const isRedirectData = (
        result: string | RedirectData
    ): result is RedirectData => {
    return Boolean(result && typeof result === "object" && "redirectUrl" in result)
}

function getPageHtml(url: string): string | RedirectData {
    //const bundleFilePath = `bundle`;
    const vendorsFilePath = `client`;

    // const hasCss = false
    // const hasJs = false

    const {store} = configureStore();
    const context: StaticRouterContext = {};
    // Render the component to a string
    const markup = renderToString(
        <StaticRouter context={context} location={url}>
            <Provider store={store}>
                <App />
            </Provider>
        </StaticRouter>
    );

    if (context.url) {
        return {redirectUrl: context.url};
    }

    const html = renderToStaticMarkup(
        <html>
            <head>
                <link rel="icon" type="image/png" href="/favicons/favicon.png"/>
                <link rel="stylesheet" href={`${vendorsFilePath}.css`}/>
            </head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{__html: markup}}></div>
                {<script>window.__PRELOADED_STATE__ = "";</script>}
                <script src={`${vendorsFilePath}.js`}/>
            </body>
        </html>,
    );

    return `<!doctype html>${html}`;
}

// RENDERER
export default (req: Request, res: Response) => {
    const result = getPageHtml(req.url);
    if(isRedirectData(result)) {
        res.redirect(result.redirectUrl);
    }
    else {
        res.send(result);
    }
};