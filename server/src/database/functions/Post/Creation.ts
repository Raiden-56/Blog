import { Post } from "../../models";
import * as mongoose from 'mongoose';

const createOne = async ({ title, description, content, keywords, authorId } : { title: string, description: string, content: string, keywords: string[], authorId: mongoose.Types.ObjectId }) => {
    
    const post = new Post({ title, description, content, keywords, authorId });

    await post.save((err) => {
        console.log(err);
    });

    return post;

}

export {
    createOne
}