import * as mongoose from 'mongoose';

export default interface UserInterface extends mongoose.Document {
    email: string;
    username: string;
    password: string;
    role: 0 | 1 | 2 | 3;
    postsId?: mongoose.Types.ObjectId[];
}