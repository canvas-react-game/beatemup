import {ErrorRequestHandler, RequestHandler, Router} from 'express';

import { Routes, routes } from '../../src/config/routes/routes';
import renderer from '../renderer';

//import {renderApp} from '../controllers';

const middlewares: Array<RequestHandler | ErrorRequestHandler> = [];

// NOTE: Не разворачивает вложенные пути
const allRoutes = (function getRoutes(routesMap: Routes): string[] {
    return Object.values(routesMap).reduce<string[]>(
        (routes, route) =>
            routes.concat(route.path),
        [],
    );
})(routes);

export function appRoutes(router: Router) {
    router.get(allRoutes, middlewares, renderer);
}