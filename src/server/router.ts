import express from "express";
import { serverRenderMiddleware, limiterMiddleware } from "./middlewares";

const router = express.Router();

const routes = ["*"];

// router.get(routes, apiProxy, limiterMiddleware, serverRenderMiddleware);
router.get(routes, limiterMiddleware, serverRenderMiddleware);

export default router;
