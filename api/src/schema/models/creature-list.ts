import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  text,
  relationship,
  timestamp,
} from '@keystone-6/core/fields';

import type { Lists } from '.keystone/types';

export const CreatureList: Lists.CreatureList = list({
  access: allowAll,
  fields: {
    name: text({
      validation: {
        isRequired: true
      }
    }),
    creatures: relationship({
      ref: 'Creature',
      many: true
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
});
