import { Router } from 'express';

const routes = Router();

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

routes.get('/classes', ClassesController.index);
routes.post('/classes', ClassesController.create);

routes.get('/connections', ConnectionsController.index);
routes.post('/connections', ConnectionsController.create);

export default routes;
