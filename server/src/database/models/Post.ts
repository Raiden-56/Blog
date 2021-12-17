import * as mongoose from 'mongoose';
import { PostInterface } from '../../api/interfaces';

const PostSchema = new mongoose.Schema<PostInterface>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    keywords: {
        type: [{
            type: String,
        }],
        required: true,
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
},
{
    timestamps: true
});

const Post = mongoose.model('Post', PostSchema);

export default Post;