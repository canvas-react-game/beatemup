import { NextFunction, Request, Response } from "express";
import ReactDOMServer from "react-dom/server";
import { makeHTMLPage } from "./utils";
import App from "../src/components/App";

const rateLimit = require("express-rate-limit");

const getPageMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    // TODO: не пойму какой тип ждет renderToString
    const reactHtml = ReactDOMServer.renderToString(App);

    res.send(makeHTMLPage(reactHtml));

    next();
};

// NOTE: Базовая защита от DDOS
const limiterMiddleware = rateLimit({
    windowMs: 20 * 60 * 1000,
    max: 100,
});

export { getPageMiddleware, limiterMiddleware };
