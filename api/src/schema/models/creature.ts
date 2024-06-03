import { list } from '@keystone-6/core';
import {
  text,
  integer,
  float,
  timestamp,
} from '@keystone-6/core/fields';

import type { Lists } from '.keystone/types';
import { permissions, rules } from '../../auth/access-control';
import { allowAll } from '@keystone-6/core/access';

export const Creature: Lists.Creature = list({
  access: allowAll,
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
  },
  hooks: {
    afterOperation: async ({ operation, item }) => {
      console.log(`✅ ${operation.toUpperCase()} on ${item.name} successul ✅`);
      return item;
    }
  }
});
