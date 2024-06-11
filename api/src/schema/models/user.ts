import { list } from '@keystone-6/core';
import {
  text,
  relationship,
  password,
  timestamp,
} from '@keystone-6/core/fields';

import type { Lists } from '.keystone/types';
import {
  permissions,
  itemAccessControlRules,
  filterAccessControlRules,
} from '../../auth/access-control';
import { ListAccessArgs } from '../../types/auth';

export const User: Lists.User = list({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update:() => true,
      delete: permissions.canManageUsers,
    },
    filter: {
      query: filterAccessControlRules.canViewAllUsers,
      update: filterAccessControlRules.canManageUsers,
      delete: permissions.canManageUsers,
    },
    item: {
      update: itemAccessControlRules.canManageUsers,
      delete: permissions.canManageUsers,
    }
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      access: {
        read: itemAccessControlRules.canManageUsers,
        update: permissions.canManageUsers,
      },
      ui: {
        itemView: {
          fieldMode: (args: ListAccessArgs) => itemAccessControlRules.canManageUsers(args) ? 'edit' : 'hidden'
        },
        listView: {
          fieldMode: (args: ListAccessArgs) => itemAccessControlRules.canManageUsers(args) ? 'read' : 'hidden'
        }
      }
    }),
    password: password({
      validation: { isRequired: true },
      ui: {
        itemView: {
          fieldMode: (args: ListAccessArgs) => itemAccessControlRules.canManageUsers(args) ? 'edit' : 'hidden'
        }
      }
    }),
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
      ui: {
        itemView: {
          fieldMode: 'read'
        }
      },
      access: {
        update: () => false
      }
    }),
    role: relationship({
      ref: "Role",
      access: {
        update: permissions.canManageUsers
      },
      ui: {
        itemView: {
          fieldMode: (args: ListAccessArgs) => permissions.canManageUsers(args) ? 'edit' : 'read'
        },
      }
    }),
  },
});
