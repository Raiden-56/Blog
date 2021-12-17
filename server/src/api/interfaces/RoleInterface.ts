import * as mongoose from 'mongoose';

export default interface RoleInterface extends mongoose.Document {
    _id: 0 | 1 | 2 | 3;
    name: string;
    description: string;
    permissions: number;
    color: string;
}