import { permissionFields } from "../schema/shared/permission-fields";

export type Permission = keyof typeof permissionFields;

export const permissionsList: Permission[] = Object.keys(
  permissionFields
) as Permission[];
