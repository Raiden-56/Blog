import database from "../..";
import { Role } from "../../models";
import * as mongoose from "mongoose";
import { RoleConfig } from "../../../config";
import { RoleInterface } from "../../../api/interfaces";

const init = async () => {
  RoleConfig.roles.forEach((role) => {
    database.Role.findOne({ _id: role._id }).then((dbRole: RoleInterface) => {
      if (!dbRole) {
        database.Role.createOne({
          _id: role._id,
          name: role.name,
          permissions: role.permissions,
          description: role.description,
          color: role.color,
        });
      }
    });
  });
};

export {
    init,
}