import { User } from "../../models";

const createOne = async ({ email, password, username } : { email: string, password: string, username: string }) => {
    
    const user = new User({ email, password, username });

    await user.save((err) => {
        console.log(err);
    });

    return user;

}

export {
    createOne
}