import * as mongoose from 'mongoose';

export default interface PostInterface {
    title: string;
    description: string;
    content: string;
    keywords: string[];
    authorId: mongoose.Types.ObjectId;
}