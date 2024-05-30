// At it's simplest, access control is either a yes or no value depending on the users session

import { permissionsList } from './permissions';
import {
  ListAccessArgs,
  OperationAccessControlFunction,
  FilterAccessControlFunction,
  ItemAccessControlFunction
} from '../types/auth';

export const isSignedIn = ({ session }: ListAccessArgs): boolean => !!session;

/**
 * Simple TRUE / FALSE permissions based on user role
 */
export const permissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    ({ session }: ListAccessArgs) => session?.data.role?.[permission],
  ])
);

export const itemAccessControlRules: Record<string, ItemAccessControlFunction> = {
  canManageUsers: ({ session, item }: ListAccessArgs) => {
    console.log(`🦧 [access-control.ts] item access session: `, session);
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageUsers({ session })) {
      return true;
    }

    return item?.id === session?.itemId;
  }
};

export const filterAccessControlRules: Record<string, FilterAccessControlFunction> = {
  canViewAllUsers: ({ session }) => {
    console.log(`🦧 [access-control.ts] item access session: `, session);
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageUsers({ session }) || permissions.canViewAllUsers({ session })) {
      return true;
    }

    return { id: { equals: session?.itemId } };
  },
  canManageUsers: ({ session }) => {
    console.log(`🦧 [access-control.ts] filter access session: `, session);
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageUsers({ session })) {
      return true;
    }

    console.log(`🦧 [access-control.ts] returning filter`);

    return { id: { equals: session?.itemId } };
  }
};

export const operationAccessControlRules: Record<string, OperationAccessControlFunction> = {
  canManageUsers: ({ session }: ListAccessArgs) => {
    console.log(`🦧 [access-control.ts] operation access session: `, session);
    if (!isSignedIn({ session })) {
      return false;
    }

    return permissions.canManageUsers({ session });
  }
}

export const rules = {
  ...operationAccessControlRules,
  ...filterAccessControlRules,
  ...itemAccessControlRules
}
