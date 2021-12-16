import * as mongoose from 'mongoose';
import { RoleInterface } from '../../api/interfaces';

const RoleSchema = new mongoose.Schema<RoleInterface>({
    name: {
        type: String,
        maxlength: 25,
        required: true,
    },
    description: {
        type: String,
    },
    permissions: {
        type: String,
        required: true,
    }
});

const Role = mongoose.model('Role', RoleSchema);

export default Role;