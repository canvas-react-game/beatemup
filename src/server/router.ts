import express from "express";
import {
    serverRenderMiddleware,
    apiProxy,
    limiterMiddleware,
} from "./middlewares";

const router = express.Router();

const routes = ["*"];

router.get(routes, limiterMiddleware, apiProxy, serverRenderMiddleware);

export default router;
