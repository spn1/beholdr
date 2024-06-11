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
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageUsers({ session })) {
      return true;
    }

    return item?.id === session?.itemId;
  },
  canManageCreatures: ({ session, item }: ListAccessArgs) => {
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageCreatures({ session })) {
      return true;
    }

    return item?.createdById === session?.itemId;
  }
};

export const filterAccessControlRules: Record<string, FilterAccessControlFunction> = {
  canViewAllUsers: ({ session }) => {
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageUsers({ session }) || permissions.canViewAllUsers({ session })) {
      return true;
    }

    return { id: { equals: session?.itemId } };
  },
  canManageUsers: ({ session }) => {
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageUsers({ session })) {
      return true;
    }

    return { id: { equals: session?.itemId } };
  },
  canManageCreatures: ({ session }) => {
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageCreatures({ session })) {
      return true;
    }

    return {
      createdBy:  {
        id: { equals: session?.itemId }
      }
    };
  },
};

export const operationAccessControlRules: Record<string, OperationAccessControlFunction> = {
  canManageUsers: ({ session }: ListAccessArgs) => {
    if (!isSignedIn({ session })) {
      return false;
    }

    return permissions.canManageUsers({ session });
  },
  canManageCreatures: ({ session }: ListAccessArgs) => {
    if (!isSignedIn({ session })) {
      return false;
    }

    return permissions.canManageCreatures({ session });
  },
}

export const rules = {
  ...operationAccessControlRules,
  ...filterAccessControlRules,
  ...itemAccessControlRules
}
