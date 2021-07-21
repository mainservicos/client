/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryServices
// ====================================================

export interface queryServices_services_cover {
  __typename: "UploadFile";
  url: string;
}

export interface queryServices_services_user {
  __typename: "UsersPermissionsUser";
  name: string;
}

export interface queryServices_services {
  __typename: "Service";
  id: string;
  name: string;
  slug: string | null;
  cover: queryServices_services_cover | null;
  user: queryServices_services_user | null;
  price: number | null;
}

export interface queryServices_servicesConnection_values {
  __typename: "Service";
  id: string;
}

export interface queryServices_servicesConnection {
  __typename: "ServiceConnection";
  values: (queryServices_servicesConnection_values | null)[] | null;
}

export interface queryServices {
  services: queryServices_services[];
  servicesConnection: queryServices_servicesConnection | null;
}

export interface queryServicesVariables {
  limit: number;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}
