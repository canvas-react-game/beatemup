import { Router } from "express";
import { getPageMiddleware } from "./middlewares";

const routes = (router: Router) => {
    router.get("/", getPageMiddleware);
};

export default routes;
