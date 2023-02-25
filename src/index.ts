import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
// import { Creature } from "./entities/Creature";
import mikroOrmConfig from "./mikro-orm.config";

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { BaseResolver } from "./resolvers";
import { CreatureResolver } from "./resolvers/creature";

const setUp = async () => {
  // Set up database
  const orm = await MikroORM.init(mikroOrmConfig);

  // Set up server
  const app = express(); 

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [BaseResolver, CreatureResolver],
      validate: false
    }),
    // An object accessible by all the resolvers
    context: () => ({
      em: orm.em.fork()
    })
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('Running on port 4000...')
  })
}

setUp();

console.log('Running...');

/*
  // Fork entity manager????
  const emFork = orm.em.fork(); // <-- create the fork

  // Run migrations to get database in sync with entities
  await orm.getMigrator().up();

  // Create some data
  const creature = emFork.create(Creature, {
    name:  'Displacer Beast',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  
  // Persist data to database
  await emFork.persistAndFlush(creature);
  console.log('Done');
*/