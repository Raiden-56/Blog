import * as express from 'express';
import database from '../../database';
import { Request, Response } from 'express';
import { isValidEmail, isValidPassword, isValidUsername } from '../validators';

export const router = express.Router();

router.post('/', isValidEmail.body, isValidPassword, isValidUsername.body, async (req: Request, res: Response) => {

    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;

    const user = await database.User.findOne({ email: email });
    if (user) return res.status(400).json({ error: 'There is Already a user with this email '});

    const newUser = await database.User.createOne({ email, password, username });
    res.status(200).json(newUser);

})