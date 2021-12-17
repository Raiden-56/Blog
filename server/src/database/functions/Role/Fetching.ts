import { Role } from "../../models";
import * as mongoose from 'mongoose';
import { RoleInterface } from '../../../api/interfaces';

interface query {
    _id?: number;
    name?: string;
    permissions?: number;
}

const findOne = async (query: query): Promise<RoleInterface> => {
    const role: RoleInterface = await Role.findOne(query);
    return role;
}

const findMany = async (query: query): Promise<RoleInterface[]> => {
    const roles: RoleInterface[] = await Role.find(query);
    return roles;
}

export {
    findOne,
    findMany
}