import { readdirSync } from 'fs';
import * as express from 'express';

export const router = express.Router();

const routes = readdirSync('./');