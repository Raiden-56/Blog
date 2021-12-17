import { Role } from "../../models";
import { RoleInterface } from "../../../api/interfaces";

interface query {
    _id?: number;
    email?: string;
}

type keys = 'name' | 'permissions' | 'description' | 'color';

const updateOne = async ({ query, key, newValue }: { query: query, key: keys, newValue: string | number }): Promise<RoleInterface> => {
    const user: RoleInterface = await Role.findOneAndUpdate(
        query,
        { [key]: newValue },
        { new: true }
    );
    return user;
}

export {
    updateOne
}