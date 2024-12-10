var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_config = require("dotenv/config");
var import_core6 = require("@keystone-6/core");

// src/schema/models/user.ts
var import_core = require("@keystone-6/core");
var import_fields2 = require("@keystone-6/core/fields");

// src/schema/shared/permission-fields.ts
var import_fields = require("@keystone-6/core/fields");
var permissionFields = {
  canViewAllUsers: (0, import_fields.checkbox)({
    defaultValue: false,
    label: "User can view all users"
  }),
  canManageUsers: (0, import_fields.checkbox)({
    defaultValue: false,
    label: "User can update & delete all users"
  }),
  canManageCreatures: (0, import_fields.checkbox)({
    defaultValue: false,
    label: "User can update & delete all creatures"
  }),
  canManageRoles: (0, import_fields.checkbox)({
    defaultValue: false,
    label: "User can update & delete all roles"
  })
};

// src/auth/permissions.ts
var permissionsList = Object.keys(
  permissionFields
);

// src/auth/access-control.ts
var isSignedIn = ({ session: session2 }) => !!session2;
var permissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    ({ session: session2 }) => session2?.data.role?.[permission]
  ])
);
var itemAccessControlRules = {
  canManageUsers: ({ session: session2, item }) => {
    if (!isSignedIn({ session: session2 })) {
      return false;
    }
    if (permissions.canManageUsers({ session: session2 })) {
      return true;
    }
    return item?.id === session2?.itemId;
  },
  canManageCreatures: ({ session: session2, item }) => {
    if (!isSignedIn({ session: session2 })) {
      return false;
    }
    if (permissions.canManageCreatures({ session: session2 })) {
      return true;
    }
    return item?.createdById === session2?.itemId;
  }
};
var filterAccessControlRules = {
  canViewAllUsers: ({ session: session2 }) => {
    if (!isSignedIn({ session: session2 })) {
      return false;
    }
    if (permissions.canManageUsers({ session: session2 }) || permissions.canViewAllUsers({ session: session2 })) {
      return true;
    }
    return { id: { equals: session2?.itemId } };
  },
  canManageUsers: ({ session: session2 }) => {
    if (!isSignedIn({ session: session2 })) {
      return false;
    }
    if (permissions.canManageUsers({ session: session2 })) {
      return true;
    }
    return { id: { equals: session2?.itemId } };
  },
  canManageCreatures: ({ session: session2 }) => {
    if (!isSignedIn({ session: session2 })) {
      return false;
    }
    if (permissions.canManageCreatures({ session: session2 })) {
      return true;
    }
    return {
      createdBy: {
        id: { equals: session2?.itemId }
      }
    };
  }
};
var operationAccessControlRules = {
  canManageUsers: ({ session: session2 }) => {
    if (!isSignedIn({ session: session2 })) {
      return false;
    }
    return permissions.canManageUsers({ session: session2 });
  },
  canManageCreatures: ({ session: session2 }) => {
    if (!isSignedIn({ session: session2 })) {
      return false;
    }
    return permissions.canManageCreatures({ session: session2 });
  }
};
var rules = {
  ...operationAccessControlRules,
  ...filterAccessControlRules,
  ...itemAccessControlRules
};

// src/schema/models/user.ts
var User = (0, import_core.list)({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete: permissions.canManageUsers
    },
    filter: {
      query: filterAccessControlRules.canViewAllUsers,
      update: filterAccessControlRules.canManageUsers,
      delete: permissions.canManageUsers
    },
    item: {
      update: itemAccessControlRules.canManageUsers,
      delete: permissions.canManageUsers
    }
  },
  fields: {
    name: (0, import_fields2.text)({ validation: { isRequired: true } }),
    email: (0, import_fields2.text)({
      validation: { isRequired: true },
      isIndexed: "unique",
      access: {
        read: itemAccessControlRules.canManageUsers,
        update: permissions.canManageUsers
      },
      ui: {
        itemView: {
          fieldMode: (args) => itemAccessControlRules.canManageUsers(args) ? "edit" : "hidden"
        },
        listView: {
          fieldMode: (args) => itemAccessControlRules.canManageUsers(args) ? "read" : "hidden"
        }
      }
    }),
    password: (0, import_fields2.password)({
      validation: { isRequired: true },
      ui: {
        itemView: {
          fieldMode: (args) => itemAccessControlRules.canManageUsers(args) ? "edit" : "hidden"
        }
      }
    }),
    createdAt: (0, import_fields2.timestamp)({
      defaultValue: { kind: "now" },
      ui: {
        itemView: {
          fieldMode: "read"
        }
      },
      access: {
        update: () => false
      }
    }),
    role: (0, import_fields2.relationship)({
      ref: "Role",
      access: {
        update: permissions.canManageUsers
      },
      ui: {
        itemView: {
          fieldMode: (args) => permissions.canManageUsers(args) ? "edit" : "read"
        }
      }
    })
  }
});

// src/schema/models/role.ts
var import_core2 = require("@keystone-6/core");
var import_fields3 = require("@keystone-6/core/fields");
var Role = (0, import_core2.list)({
  access: {
    operation: {
      query: () => true,
      create: permissions.canManageRoles,
      update: permissions.canManageRoles,
      delete: permissions.canManageRoles
    },
    filter: {
      query: () => true,
      update: permissions.canManageRoles,
      delete: permissions.canManageRoles
    },
    item: {
      create: permissions.canManageRoles,
      update: permissions.canManageRoles,
      delete: permissions.canManageRoles
    }
  },
  fields: {
    name: (0, import_fields3.text)({ validation: { isRequired: true } }),
    ...permissionFields
  }
});

// src/schema/models/creature.ts
var import_core3 = require("@keystone-6/core");
var import_fields4 = require("@keystone-6/core/fields");
var Creature = (0, import_core3.list)({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete: permissions.canManageCreatures
    },
    filter: {
      query: () => true,
      update: filterAccessControlRules.canManageCreatures,
      delete: permissions.canManageCreatures
    },
    item: {
      update: itemAccessControlRules.canManageCreatures,
      delete: permissions.canManageCreatures
    }
  },
  fields: {
    name: (0, import_fields4.text)({
      validation: {
        isRequired: true
      }
    }),
    challengeRating: (0, import_fields4.float)({
      defaultValue: 0,
      validation: {
        isRequired: true,
        min: 0,
        max: 30
      }
    }),
    experience: (0, import_fields4.integer)({
      defaultValue: 0,
      validation: {
        isRequired: true,
        min: 0,
        max: 1e6
      }
    }),
    size: (0, import_fields4.select)({
      options: [
        { label: "Tiny", value: "TINY" },
        { label: "Small", value: "SMALL" },
        { label: "Medium", value: "MEDIUM" },
        { label: "Large", value: "LARGE" },
        { label: "Huge", value: "HUGE" },
        { label: "Gargantuan", value: "GARGANTUAN" }
      ],
      ui: {
        displayMode: "segmented-control"
      }
    }),
    type: (0, import_fields4.text)({
      validation: {
        isRequired: true
      }
    }),
    alignment: (0, import_fields4.text)({
      validation: {
        isRequired: true
      }
    }),
    armorClass: (0, import_fields4.integer)({
      validation: {
        isRequired: true,
        min: 0,
        max: 30
      }
    }),
    hitPoints: (0, import_fields4.integer)({
      validation: {
        isRequired: true,
        min: 0,
        max: 1e3
      }
    }),
    hitDice: (0, import_fields4.text)({
      validation: {
        isRequired: false
      }
    }),
    // speed
    strength: (0, import_fields4.integer)({
      validation: {
        isRequired: true,
        min: 0,
        max: 30
      }
    }),
    dexterity: (0, import_fields4.integer)({
      validation: {
        isRequired: true,
        min: 0,
        max: 30
      }
    }),
    constitution: (0, import_fields4.integer)({
      validation: {
        isRequired: true,
        min: 0,
        max: 30
      }
    }),
    intelligence: (0, import_fields4.integer)({
      validation: {
        isRequired: true,
        min: 0,
        max: 30
      }
    }),
    wisdom: (0, import_fields4.integer)({
      validation: {
        isRequired: true,
        min: 0,
        max: 30
      }
    }),
    charisma: (0, import_fields4.integer)({
      validation: {
        isRequired: true,
        min: 0,
        max: 30
      }
    }),
    // Proficiencies
    // damageVulnerabilities
    // damageResistances
    // damageImmunities
    // conditionImmunities
    // sense
    languages: (0, import_fields4.text)({
      validation: {
        isRequired: false
      }
    }),
    proficiencyBonus: (0, import_fields4.integer)({
      validation: {
        isRequired: false,
        min: 0,
        max: 10
      }
    }),
    // specialAbilities
    // actions
    // image
    url: (0, import_fields4.text)({
      validation: {
        isRequired: false
      }
    }),
    // legendaryAction
    /** META */
    createdAt: (0, import_fields4.timestamp)({
      ui: {
        createView: {
          fieldMode: "hidden"
        }
      },
      defaultValue: { kind: "now" }
    }),
    createdBy: (0, import_fields4.relationship)({
      ref: "User",
      access: {
        update: () => false
      }
    })
  }
});

// src/schema/models/creature-list.ts
var import_core4 = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields5 = require("@keystone-6/core/fields");
var CreatureList = (0, import_core4.list)({
  access: import_access.allowAll,
  fields: {
    name: (0, import_fields5.text)({
      validation: {
        isRequired: true
      }
    }),
    creatures: (0, import_fields5.relationship)({
      ref: "Creature",
      many: true
    }),
    createdAt: (0, import_fields5.timestamp)({
      ui: {
        createView: {
          fieldMode: "hidden"
        }
      },
      defaultValue: { kind: "now" }
    })
  }
});

// src/schema/models/encounter.ts
var import_core5 = require("@keystone-6/core");
var import_access2 = require("@keystone-6/core/access");
var import_fields6 = require("@keystone-6/core/fields");

// src/lib/calculate-encounter-experience.ts
var encounterMultipliers = {
  1: 1,
  2: 1.5,
  3: 2,
  4: 2,
  5: 2,
  6: 2,
  7: 2.5,
  8: 2.5,
  9: 2.5,
  10: 2.5,
  11: 3,
  12: 3,
  13: 3,
  14: 3,
  15: 4
};
var calculateEncounterExperience = (creatures) => {
  const creatureCount = creatures.length;
  const experienceSum = creatures.reduce((acc, { experience }) => {
    return acc += experience;
  }, 0);
  return experienceSum * encounterMultipliers[creatureCount];
};

// src/schema/models/encounter.ts
var Encounter = (0, import_core5.list)({
  access: import_access2.allowAll,
  fields: {
    name: (0, import_fields6.text)({
      validation: {
        isRequired: true
      }
    }),
    creatures: (0, import_fields6.relationship)({
      ref: "Creature",
      many: true
    }),
    totalExperience: (0, import_fields6.virtual)({
      field: (lists2) => import_core5.graphql.field({
        type: import_core5.graphql.Int,
        async resolve(item, args, context) {
          const { creatures } = await context.query.Encounter.findOne({
            query: "creatures { experience }",
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
    createdAt: (0, import_fields6.timestamp)({
      ui: {
        createView: {
          fieldMode: "hidden"
        }
      },
      defaultValue: { kind: "now" }
    })
  }
});

// src/schema/schema.ts
var lists = {
  User,
  Role,
  Creature,
  CreatureList,
  Encounter
};

// src/auth/auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  sessionData: `id name createdAt role { ${permissionsList.join(" ")} }`,
  secretField: "password"
  // initFirstItem: {
  //   fields: ['name', 'email', 'password'],
  //   // you shouldn't use this in production
  // },
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// src/seed/select-creature-data.ts
var selectCreatureData = (creatures) => {
  return creatures.map((creature) => ({
    name: creature.name,
    challengeRating: creature.challenge_rating,
    experience: creature.xp,
    type: creature.type,
    alignment: creature.alignment,
    armorClass: creature.armor_class,
    hitPoints: creature.hit_points,
    hitDice: creature.hit_dice,
    hitPointsRoll: creature.hit_points_roll,
    strength: creature.strength,
    dexterity: creature.dexterity,
    constitution: creature.constitution,
    intelligence: creature.intelligence,
    wisdom: creature.wisdom,
    charisma: creature.charisma,
    damageVulnerabilities: creature.damage_vulnerabilities,
    damageResistances: creature.damage_resistances,
    damageImmunities: creature.damage_immunities,
    conditionImmunities: creature.condition_immunities,
    languages: creature.languages,
    proficiencyBonus: creature.proficiency_bonus,
    url: creature.url
  }));
};

// src/seed/seed-data.ts
var API_URL = "https://www.dnd5eapi.co/api";
var fetchCreatureDataFromApi = async (path) => {
  const data = await fetch(`${API_URL}${path}`);
  const { results } = await data.json();
  const indexes = results.map(({ index }) => index);
  const creatures = await Promise.all(
    indexes.map(async (index) => {
      const data2 = await fetch(`${API_URL}/monsters/${index}`);
      return await data2.json();
    })
  );
  return creatures;
};
var insertSeedDataFromApi = async (context) => {
  const creatures = await fetchCreatureDataFromApi("/monsters/?name=aboleth");
  const reducedCreatures = selectCreatureData(creatures);
  console.log(`\u{1F6A8} [seed-data.ts] creatures: `, creatures);
  console.log(`\u{1F6A8} [seed-data.ts] reducedCreatures: `, reducedCreatures);
  console.log(`\u{1F6A8} [seed-data.ts] creatures: `, creatures.length);
  console.log("\u{1F331} Seeded Database! \u{1F331}");
};

// keystone.ts
var databaseUrl = process.env.DATABASE_URL;
var keystone_default = withAuth(
  (0, import_core6.config)({
    db: {
      provider: "postgresql",
      url: databaseUrl,
      onConnect: async (context) => {
        console.log(`\u{1F4BE} Database Connection Established \u{1F4BE}`);
        if (process.argv.includes("--seed-data-from-api")) {
          console.log("\u{1F331} Seeding Database \u{1F331}");
          await insertSeedDataFromApi(context);
        }
      },
      enableLogging: true,
      idField: { kind: "uuid" }
    },
    lists,
    session,
    server: {
      cors: {
        credentials: true
      }
    }
  })
);
//# sourceMappingURL=config.js.map
