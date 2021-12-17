import { Post } from "../../models";
import * as mongoose from 'mongoose';
import { PostInterface } from '../../../api/interfaces';

interface query {
    title?: string;
    keywords?: string;
    _id?: mongoose.Types.ObjectId;
}

const findOne = async (query: query): Promise<PostInterface> => {
    const post: PostInterface = await Post.findOne(query);
    return post;
}

const findMany = async (query: query): Promise<PostInterface[]> => {
    const posts: PostInterface[] = await Post.find(query);
    return posts;
}

export {
    findOne,
    findMany
}