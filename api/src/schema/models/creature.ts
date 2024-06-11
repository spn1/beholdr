import { list } from '@keystone-6/core';
import {
  text,
  integer,
  float,
  timestamp,
  relationship,
} from '@keystone-6/core/fields';

import type { Lists } from '.keystone/types';
import {
  filterAccessControlRules,
  operationAccessControlRules,
  itemAccessControlRules,
  permissions
} from '../../auth/access-control';

export const Creature: Lists.Creature = list({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update:() => true,
      delete: permissions.canManageCreatures,
    },
    filter: {
      query: () => true,
      update: filterAccessControlRules.canManageCreatures,
      delete: permissions.canManageCreatures,
    },
    item: {
      update: itemAccessControlRules.canManageCreatures,
      delete: permissions.canManageCreatures,
    }
  },
  fields: {
    name: text({
      validation: {
        isRequired: true
      }
    }),
    challengeRating: float({
      defaultValue: 0,
      validation: {
        isRequired: true,
        min: 0,
        max: 30
      },
    }),
    experience: integer({
      defaultValue: 0,
      validation: {
        isRequired: true,
        min: 0,
        max: 1000000
      }
    }),
    createdAt: timestamp({
      ui: {
        createView: {
          fieldMode: 'hidden'
        }
      },
      defaultValue: { kind: 'now' },
    }),
    createdBy: relationship({
      ref: "User",
      access: {
        update: () => false
      }
    }),
  },
});
