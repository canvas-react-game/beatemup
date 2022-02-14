import { Router } from "express";
import { serverRenderMiddleware } from "./middlewares";

const routes = (router: Router) => {
    router.get("*", serverRenderMiddleware);
};

export default routes;
