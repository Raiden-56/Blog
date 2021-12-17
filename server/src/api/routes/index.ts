import { resolve } from 'path';
import { readdirSync } from 'fs';
import { Router } from 'express';
import * as express from 'express';

export const router = express.Router();

const path = resolve('src', 'api', 'routes');
const routes = readdirSync(path).filter((route) => route.endsWith('.ts') && route !== 'index.ts').map((route) => route.split(".")[0]);

routes.forEach((route) => {
    import('./' + route).then((file: { router: Router }) => {
        router.use('/' + route, file.router);
    });
});