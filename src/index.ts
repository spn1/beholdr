import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Creature } from "./entities/Creature";
import mikroOrmConfig from "./mikro-orm.config";

const setUp = async () => {
  // Set up database
  const orm = await MikroORM.init(mikroOrmConfig);

  // Fork entity manager????
  const emFork = orm.em.fork(); // <-- create the fork

  // Run migrations to get database in sync with entities
  // await orm.getMigrator().up();

  // Create some data
  const creature = emFork.create(Creature, {
    name:  'Displacer Beast',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  
  // Persist data to database
  await emFork.persistAndFlush(creature);
  console.log('Done');
}

setUp();

console.log('Running...');