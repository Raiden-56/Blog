import * as JOI from 'joi';
import { UserConfig } from '../../config';
import { NextFunction, Request, Response } from 'express';

const schema = JOI.object({
    password: JOI
        .string()
        .required()
        .min(UserConfig.passwordMinLength)
        .max(UserConfig.passwordMaxLength)
        .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/))
});

export default (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);
    if (!validation) {
        res.header("Content-Type", 'application/json');
        res.status(400).json(validation.error);
        return;
    }
    next();
    
}