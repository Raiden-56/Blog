import * as mongoose from 'mongoose';
import { UserConfig } from '../../config';
import { UserInterface } from '../../api/interfaces';
import { hashPassword } from '../../api/utils/functions';

const UserSchema = new mongoose.Schema<UserInterface>({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        maxlength: UserConfig.usernameMaxLength,
        minlength: UserConfig.usernmaeMinLength,
    },
    password: {
        type: String,
        required: true
    },
    roleId: {
        type: Number,
        required: true,
        default: 0,
        /*See how to get back the ref*/
        //ref: "Role",
        /*
            0: member
            1: writer
            2: moderator
            3: admin
        */
    },
    postsId: {
        type: [{
            type: String,
            ref: "Post"
        }],
        required: true,
    },
},
{
    timestamps: true
});

UserSchema.pre('save', async function (next) {
    this.password = await hashPassword({ password: this.password });
    next();
})

const User = mongoose.model('User', UserSchema);

export default User;