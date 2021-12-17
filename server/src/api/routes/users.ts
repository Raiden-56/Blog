import * as express from "express";
import * as mongoose from 'mongoose';
import { Request, Response } from "express";
import database from "../../database";

export const router = express.Router();

router.get("/:userId", async (req: Request, res: Response) => {
    
    const userId: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.userId);

    const user = await database.User.findOne({ _id: userId });

    if (user) return res.status(200).json(user);
    else return res.status(404).json({ message: 'No user with this id '});

});
