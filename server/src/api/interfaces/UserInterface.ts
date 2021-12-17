import * as mongoose from 'mongoose';

export default interface UserInterface extends mongoose.Document {
    email: string;
    username: string;
    password: string;
    roleId: 0 | 1 | 2 | 3;
    postsId?: mongoose.Types.ObjectId[];
}