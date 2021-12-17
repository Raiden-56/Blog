import * as JOI from 'joi';
import { UserConfig } from '../../config';
import { NextFunction, Request, Response } from 'express';

const schema = JOI.object({
    username: JOI
        .string()
        .required()
        .max(UserConfig.usernameMaxLength)
        .min(UserConfig.usernmaeMinLength)
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