import * as mongoose from 'mongoose';

export default interface PostInterface extends mongoose.Document {
    title: string;
    description: string;
    content: string;
    keywords: string[];
    authorId: mongoose.Types.ObjectId;
}