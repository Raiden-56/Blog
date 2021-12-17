import * as express from 'express';
import database from '../../database';
import { Request, Response } from 'express';
import { UserInterface } from '../interfaces';
import isLogedIn from '../middlewares/isLogedIn';
import { comparePasswords } from '../utils/functions';
import { isValidEmail, isValidPassword } from '../validators';

export const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const user = await database.User.findOne({ _id: req.session.userId });
    console.log(req.session);
    if (!user) return res.status(401).json({ message: 'null' });
    res.status(200).json(user);
})

router.post('/', isValidEmail.body, isValidPassword, async (req: Request, res: Response) => {

    const email: string = req.body.email;
    const password: string = req.body.password;

    const user: UserInterface = await database.User.findOne({ email: email });
    if (!user) return res.status(400).json({ error: 'Invalid Email/Pasword '});

    const areValid = await comparePasswords({ hashedPassword: user.password, password: password });
    
    if (areValid) {
        req.session.userId = user._id;
        res.status(200).json(user);
    } else {
        res.status(400).json({ error: 'Invalid Email/Password' });
    }

});