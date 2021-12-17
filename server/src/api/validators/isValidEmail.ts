import * as JOI from 'joi';
import { NextFunction, Request, Response } from 'express';

const schema = JOI.object({
    email: JOI
        .string()
        .required()
        .email()
});

export default {
    body: (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body);
        if (!validation) {
            res.header("Content-Type", 'application/json');
            res.status(400).json(validation.error);
            return;
        }
        next();
    },
    params: (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body);
        if (!validation) {
            res.header("Content-Type", 'application/json');
            res.status(400).json(validation.error);
            return;
        }
        next();
    }
}