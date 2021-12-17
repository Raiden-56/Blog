import { Role } from "../../models";

const createOne = async ({ _id, name, permissions, description, color } : { _id: number, name: string, permissions: number, description: string, color: string }) => {
    
    const role = new Role({ _id, name, permissions, description, color });

    await role.save((err) => {
        console.log(err);
    });

    return role;

}

export {
    createOne
}