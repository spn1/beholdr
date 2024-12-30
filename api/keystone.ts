import "dotenv/config";
import { config } from "@keystone-6/core";

import { lists } from "./src/schema/schema";
import { withAuth, session } from "./src/auth/auth";
import { insertSeedDataFromApi } from "./src/seed/seed-data";

import { TypeInfo } from ".keystone/types";
import { KeystoneContext } from "@keystone-6/core/types";

const databaseUrl = process.env.DATABASE_URL;

export default withAuth(
  config<TypeInfo>({
    db: {
      provider: "postgresql",
      url: databaseUrl,
      onConnect: async (context: KeystoneContext<TypeInfo>) => {
        console.log(`💾 Database Connection Established 💾`);
        if (process.argv.includes("--seed-data-from-api")) {
          console.log("🌱 Seeding Database 🌱");
          await insertSeedDataFromApi(context);
        }
      },
      enableLogging: true,
      idField: { kind: "uuid" },
    },
    lists,
    session,
    server: {
      cors: {
        credentials: true,
      },
      port: parseInt(process.env.PORT),
    },
  })
);
