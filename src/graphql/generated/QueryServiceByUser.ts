/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryServiceByUser
// ====================================================

export interface QueryServiceByUser_users_services_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryServiceByUser_users_services {
  __typename: "Service";
  name: string;
  price: number | null;
  short_description: string | null;
  slug: string | null;
  cover: QueryServiceByUser_users_services_cover | null;
  released_at: any;
}

export interface QueryServiceByUser_users {
  __typename: "UsersPermissionsUser";
  name: string | null;
  id: string;
  email: string;
  services: QueryServiceByUser_users_services[];
}

export interface QueryServiceByUser {
  users: QueryServiceByUser_users[];
}

export interface QueryServiceByUserVariables {
  email: string;
}
