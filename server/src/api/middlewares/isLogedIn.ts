import * as mongoose from 'mongoose';
import database from '../../database';
import { NextFunction, Request, Response } from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
    const user = await database.User.findOne({ _id: req.session.userId });
    if (!user) return res.status(401).redirect("http://localhost:3003/login");
    req.user = user;
    next();
}