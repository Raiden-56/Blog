import * as mongoose from 'mongoose';
import { UserInterface } from '../../api/interfaces';

const UserSchema = new mongoose.Schema<UserInterface>({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Role",
    },
    postsId: {
        type: [{
            type: String,
            ref: "Post"
        }],
        required: true,
    },
});

const User = mongoose.model('User', UserSchema);

export default User;