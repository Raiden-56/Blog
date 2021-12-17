import { User } from "../../models";

const createOne = async ({ email, password, username } : { email: string, password: string, username: string }) => {
    
    const user = new User({ email, password, username });

    await user.save((err) => {
        console.log('User creation Err:', err);
    });

    return user;

}

export {
    createOne
}