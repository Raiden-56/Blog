import * as mongoose from 'mongoose';
import { RoleConfig } from '../../config';
import { RoleInterface } from '../../api/interfaces';

const RoleSchema = new mongoose.Schema<RoleInterface>({
    _id: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        default: RoleConfig.defaultName,
        maxlength: RoleConfig.nameMaxLength,
        minlength: RoleConfig.nameMinLength,
    },
    description: {
        type: String,
        maxlength: RoleConfig.descriptionMaxLength,
        minlength: RoleConfig.descriptionMinLength,
    },
    permissions: {
        type: Number,
        required: true,
        default: RoleConfig.defaultPermission
    },
    color: {
        type: String,
        required: true,
        default: RoleConfig.defaultColor
    }
},
{
    timestamps: true
});

const Role = mongoose.model('Role', RoleSchema);

export default Role;