/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryServiceByUser
// ====================================================

export interface QueryServiceByUser_services_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryServiceByUser_services {
  __typename: "Service";
  name: string;
  id: string;
  contact: string | null;
  cover: QueryServiceByUser_services_cover | null;
  price: number | null;
  slug: string | null;
}

export interface QueryServiceByUser {
  services: QueryServiceByUser_services[];
}

export interface QueryServiceByUserVariables {
  id: string;
}
