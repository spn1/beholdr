import type { Lists } from '.keystone/types';

import { User } from './models/user';
import { Role } from './models/role';
import { Creature } from './models/creature';
import { CreatureList } from './models/creature-list';
import { Encounter } from './models/encounter';

export const lists: Lists = {
  User,
  Role,
  Creature,
  CreatureList,
  Encounter
};