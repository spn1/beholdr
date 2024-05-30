import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  text,
} from '@keystone-6/core/fields';

import { permissionFields } from '../shared/permission-fields';

import type { Lists } from '.keystone/types';

export const Role: Lists.Role = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    ...permissionFields
  },
});
