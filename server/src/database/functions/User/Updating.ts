import { User } from "../../models";
import * as mongoose from 'mongoose';
import { UserInterface } from "../../../api/interfaces";

interface query {
    _id?: string;
    email?: string;
}

const updateOne = async ({ query, key, newValue }: { query: query, key: 'username' | 'role', newValue: string | mongoose.Types.ObjectId }): Promise<UserInterface> => {
    const user: UserInterface = await User.findOneAndUpdate(
        query,
        { [key]: newValue },
        { new: true }
    );
    return user;
}

export {
    updateOne
}