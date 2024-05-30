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
var import_core3 = require("@keystone-6/core");

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
    console.log(`\u{1F9A7} [access-control.ts] item access session: `, session2);
    if (!isSignedIn({ session: session2 })) {
      return false;
    }
    if (permissions.canManageUsers({ session: session2 })) {
      return true;
    }
    return item?.id === session2?.itemId;
  }
};
var filterAccessControlRules = {
  canViewAllUsers: ({ session: session2 }) => {
    console.log(`\u{1F9A7} [access-control.ts] item access session: `, session2);
    if (!isSignedIn({ session: session2 })) {
      return false;
    }
    if (permissions.canManageUsers({ session: session2 }) || permissions.canViewAllUsers({ session: session2 })) {
      return true;
    }
    return { id: { equals: session2?.itemId } };
  },
  canManageUsers: ({ session: session2 }) => {
    console.log(`\u{1F9A7} [access-control.ts] filter access session: `, session2);
    if (!isSignedIn({ session: session2 })) {
      return false;
    }
    if (permissions.canManageUsers({ session: session2 })) {
      return true;
    }
    console.log(`\u{1F9A7} [access-control.ts] returning filter`);
    return { id: { equals: session2?.itemId } };
  }
};
var operationAccessControlRules = {
  canManageUsers: ({ session: session2 }) => {
    console.log(`\u{1F9A7} [access-control.ts] operation access session: `, session2);
    if (!isSignedIn({ session: session2 })) {
      return false;
    }
    return permissions.canManageUsers({ session: session2 });
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
      }
    }),
    password: (0, import_fields2.password)({ validation: { isRequired: true } }),
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
          fieldMode: permissions.canManageUsers ? "edit" : "read"
        }
      }
    })
  }
});

// src/schema/models/role.ts
var import_core2 = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields3 = require("@keystone-6/core/fields");
var Role = (0, import_core2.list)({
  access: import_access.allowAll,
  fields: {
    name: (0, import_fields3.text)({ validation: { isRequired: true } }),
    ...permissionFields
  }
});

// src/schema/schema.ts
var lists = {
  User,
  Role
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

// keystone.ts
var databaseUrl = process.env.DATABASE_URL || "mongodb://localhost/beholdr";
var keystone_default = withAuth(
  (0, import_core3.config)({
    db: {
      provider: "postgresql",
      url: databaseUrl,
      onConnect: async (context) => {
        console.log("\u{1F4BE} Database Connection Established \u{1F4BE}");
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
