import { checkbox } from '@keystone-6/core/fields';

export const permissionFields = {
  canViewAllUsers: checkbox({
    defaultValue: false,
    label: 'User can view all users'
  }),
  canManageUsers: checkbox({
    defaultValue: false,
    label: 'User can update & delete all users'
  }),
};