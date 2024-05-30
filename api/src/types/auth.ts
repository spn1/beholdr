import { Permission } from '../auth/permissions';
import { GraphQLQueryFilter } from './keystone';

export type Session = {
  itemId: string;
  listKey: string;
  data: {
    name: string;
    role?: {
      id: string;
      name: string;
    } & {
      [key in Permission]: boolean;
    };
  };
};

export type ListAccessArgs = {
  itemId?: string;
  session?: Session;
  item?: Record<string, any>;
};

export type OperationAccessControlFunction = (args: ListAccessArgs) => boolean;
export type FilterAccessControlFunction = (args: ListAccessArgs) => GraphQLQueryFilter | boolean;
export type ItemAccessControlFunction = (args: ListAccessArgs) => boolean;