import { __prod__ } from "./constants";
import { Creature } from "./entities/Creature";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'), // path to the folder with migrations
    glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
    transactional: true, // wrap each migration in a transaction
    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
  },
  entities: [Creature],
  dbName: 'beholdr',
  type: 'postgresql',
  debug: !__prod__
} as Parameters<typeof MikroORM.init>[0]