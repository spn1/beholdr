import { list } from "@keystone-6/core";
import {
  text,
  integer,
  float,
  timestamp,
  relationship,
  select,
} from "@keystone-6/core/fields";

import type { Lists } from ".keystone/types";
import {
  filterAccessControlRules,
  operationAccessControlRules,
  itemAccessControlRules,
  permissions,
} from "../../auth/access-control";

export const Creature: Lists.Creature = list({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
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
    },
  },
  fields: {
    name: text({
      validation: {
        isRequired: true,
      },
    }),
    challengeRating: float({
      defaultValue: 0,
      validation: {
        isRequired: true,
        min: 0,
        max: 30,
      },
    }),
    experience: integer({
      defaultValue: 0,
      validation: {
        isRequired: true,
        min: 0,
        max: 1000000,
      },
    }),
    size: select({
      options: [
        { label: "Tiny", value: "TINY" },
        { label: "Small", value: "SMALL" },
        { label: "Medium", value: "MEDIUM" },
        { label: "Large", value: "LARGE" },
        { label: "Huge", value: "HUGE" },
        { label: "Gargantuan", value: "GARGANTUAN" },
      ],
      ui: {
        displayMode: "segmented-control",
      },
    }),
    type: text({
      validation: {
        isRequired: true,
      },
    }),
    alignment: text({
      validation: {
        isRequired: true,
      },
    }),
    armorClass: integer({
      validation: {
        isRequired: true,
        min: 0,
        max: 30,
      },
    }),
    hitPoints: integer({
      validation: {
        isRequired: true,
        min: 0,
        max: 1000,
      },
    }),
    hitDice: text({
      validation: {
        isRequired: false,
      },
    }),
    // speed
    strength: integer({
      validation: {
        isRequired: true,
        min: 0,
        max: 30,
      },
    }),
    dexterity: integer({
      validation: {
        isRequired: true,
        min: 0,
        max: 30,
      },
    }),
    constitution: integer({
      validation: {
        isRequired: true,
        min: 0,
        max: 30,
      },
    }),
    intelligence: integer({
      validation: {
        isRequired: true,
        min: 0,
        max: 30,
      },
    }),
    wisdom: integer({
      validation: {
        isRequired: true,
        min: 0,
        max: 30,
      },
    }),
    charisma: integer({
      validation: {
        isRequired: true,
        min: 0,
        max: 30,
      },
    }),
    // Proficiencies
    // damageVulnerabilities
    // damageResistances
    // damageImmunities
    // conditionImmunities
    // sense
    languages: text({
      validation: {
        isRequired: false,
      },
    }),
    proficiencyBonus: integer({
      validation: {
        isRequired: false,
        min: 0,
        max: 10,
      },
    }),
    // specialAbilities
    // actions
    // image
    url: text({
      validation: {
        isRequired: false,
      },
    }),
    // legendaryAction
    /** META */
    createdAt: timestamp({
      ui: {
        createView: {
          fieldMode: "hidden",
        },
      },
      defaultValue: { kind: "now" },
    }),
    createdBy: relationship({
      ref: "User",
      access: {
        update: () => false,
      },
    }),
  },
});
