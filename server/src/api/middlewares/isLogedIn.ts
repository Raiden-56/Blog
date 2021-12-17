import database from '../../database';
import { NextFunction, Request, Response } from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
    const user = await database.User.findOne({ _id: req.session.userId });
    if (!user) return res.status(401).json({ message: 'Need to login for this route' });
    req.user = user;
    next();
}