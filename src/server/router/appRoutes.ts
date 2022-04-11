import express from "express";
import { routes, Routes } from "@/config/routes/routes";
import {
    serverRenderMiddleware,
    limiterMiddleware,
//    redirectMiddleware,
} from "../middlewares";

const appRouter = express.Router();

const appRoutes = (function getRoutes(routesMap: Routes): string[] {
    return Object.values(routesMap).reduce<string[]>(
        (routes, route) => routes.concat([route.path, `${route.path}/*`]),
        [],
    );
}(routes));
appRoutes.push("/");

appRouter.get(appRoutes, limiterMiddleware, serverRenderMiddleware);
// NOTE: Если дошли до сюда, то такого роута не существует и нужно сделать redirect или 404
// appRouter.get("*", redirectMiddleware);

export { appRouter };
