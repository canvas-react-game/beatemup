import {Router} from 'express';

import {appRoutes} from './app';
// import {staticRoutes} from './static';

const router: Router = Router();

appRoutes(router);

export default router;