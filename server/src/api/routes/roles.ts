import * as express from 'express';
import database from '../../database';
import { Request, Response } from 'express';

export const router = express.Router();

router.get('/:roleId', async (req: Request, res: Response) => {

    const roleId: number = Number(req.params.roleId);

    const role = await database.Role.findOne({ _id: roleId });
    
    res.status(200).json(role);
});