import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express';
import MongoStore = require('connect-mongo');
import * as ExpressSession from 'express-session';
import { Application, Request, Response } from 'express';

const app: Application = express();
const port: number = Number(process.env.port) | 3002;

const SessionMiddleware = ExpressSession({
    secret: process.env.secret,
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
      mongoUrl: process.env.mongoUrl,
    }),
});

app.use(SessionMiddleware);

app.get('/', (req: Request, res: Response) => {
    console.log('Bite');
});

app.listen(port, () => console.log("Listening on port:", port));