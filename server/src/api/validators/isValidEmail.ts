import * as JOI from 'joi';
import { NextFunction, Request, Response } from 'express';

const schema = JOI.object({
    email: JOI
        .string()
        .email()
        .required()
}).unknown(true);

export default {
    body: (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body);
        if (validation.error)  return res.status(400).json(validation.error);
        next();
    },
    params: (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body);
        if (validation.error)  return res.status(400).json(validation.error);
        next();
    }
}