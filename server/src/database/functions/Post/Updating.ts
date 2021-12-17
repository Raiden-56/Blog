import { Post } from "../../models";
import { PostInterface } from "../../../api/interfaces";

interface query {
    _id?: string;
    email?: string;
}

const updateOne = async ({ query, key, newValue }: { query: query, key: 'title' | 'content' | 'description', newValue: string }): Promise<PostInterface> => {
    const post: PostInterface = await Post.findOneAndUpdate(
        query,
        { [key]: newValue },
        { new: true }
    );
    return post;
}

export {
    updateOne
}