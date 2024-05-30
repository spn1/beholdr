import { config,  } from '@keystone-6/core';

import { lists } from './src/schema/schema';
import { withAuth, session } from './src/auth/auth';

import { TypeInfo } from '.keystone/types';
import { KeystoneContext } from '@keystone-6/core/types';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/beholdr';

export default withAuth(
  config<TypeInfo>({
    db: {
      provider: 'postgresql',
      url: databaseUrl,
      onConnect: async (context: KeystoneContext<TypeInfo>) => {
        console.log('💾 Database Connection Established 💾');
      },
      enableLogging: true,
      idField: { kind: 'uuid' },
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
