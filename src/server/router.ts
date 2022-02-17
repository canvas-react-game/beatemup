import express from "express";
import { serverRenderMiddleware, limiterMiddleware } from "./middlewares";

const router = express.Router();

// TODO: продумать как добавить список роутов (при ограничении роутов ругается service workers)
const routes = ["*"];

router.get(routes, limiterMiddleware, serverRenderMiddleware);

export default router;
