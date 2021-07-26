/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryUserById
// ====================================================

export interface QueryUserById_user {
  __typename: "UsersPermissionsUser";
  username: string;
  email: string;
}

export interface QueryUserById {
  user: QueryUserById_user | null;
}

export interface QueryUserByIdVariables {
  id: string;
}
