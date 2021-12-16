import { router } from './routes';
import * as express from 'express';

export const routes = express.Router();

routes.use('/api', router);