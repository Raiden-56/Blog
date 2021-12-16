import * as mongoose from 'mongoose';

export default interface UserInterface {
    email: string;
    username: string;
    password: string;
    role: mongoose.Types.ObjectId;
    postsId: mongoose.Types.ObjectId[];
}