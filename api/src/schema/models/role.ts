import { list } from '@keystone-6/core';
import {
  text,
} from '@keystone-6/core/fields';
import { denyAll, allowAll, allOperations } from '@keystone-6/core/access';

import { permissionFields } from '../shared/permission-fields';
import { itemAccessControlRules, permissions } from '../../auth/access-control';

import type { Lists } from '.keystone/types';

export const Role: Lists.Role = list({
  access: {
    operation: {
      query: () => true,
      create: permissions.canManageRoles,
      update: permissions.canManageRoles,
      delete: permissions.canManageRoles,
    },
    filter: {
      query: () => true,
      update: permissions.canManageRoles,
      delete: permissions.canManageRoles,
    },
    item: {
      create: permissions.canManageRoles,
      update: permissions.canManageRoles,
      delete: permissions.canManageRoles,
    }
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    ...permissionFields
  },
});
