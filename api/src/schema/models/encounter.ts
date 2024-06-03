import { list, graphql } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  text,
  relationship,
  virtual,
  timestamp,
} from '@keystone-6/core/fields';

import type { Lists } from '.keystone/types';
import { calculateEncounterExperience } from '../../lib/calculate-encounter-experience';

export const Encounter: Lists.Encounter = list({
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
    totalExperience: virtual({
      field: lists => 
        graphql.field({
          type: graphql.Int,
          async resolve(item, args, context) {
            const { creatures } = await context.query.Encounter.findOne({
              query: 'creatures { experience }',
              where: {
                id: item.id
              }
            });

            if (creatures.length === 0) {
              return 0;
            }

            return calculateEncounterExperience(creatures);
        }
      })
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
