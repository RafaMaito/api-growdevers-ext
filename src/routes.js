import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import logRequestsMiddleware from './app/middlewares/logRequests';

const routes = new Router();

routes.use(logRequestsMiddleware);

// User
routes.get('/users', UserController.index);
routes.get('/users/:uid', UserController.show);

routes.post('/users', UserController.store);

routes.put('/users/:uid', UserController.update);

// Login
routes.post('/login', SessionController.store);

export default routes;
