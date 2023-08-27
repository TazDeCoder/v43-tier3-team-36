import { Router } from 'express';

import user from './user.route';
import collection from './collection.route';

const v1Router = Router();

v1Router.use(user);
v1Router.use(collection);

export default v1Router;
