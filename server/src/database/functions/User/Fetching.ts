import * as mongoose from 'mongoose';
import { UserInterface } from '../../../api/interfaces';
import { User } from "../../models";

interface query {
    role?: number;
    email?: string;
    username?: string;
    _id?: mongoose.Types.ObjectId;
}

const findOne = async (query: query): Promise<UserInterface> => {
    const user: UserInterface = await User.findOne(query);
    return user;
}

const findMany = async (query: query): Promise<UserInterface[]> => {
    const users: UserInterface[] = await User.find(query);
    return users;
}

export {
    findOne,
    findMany
}