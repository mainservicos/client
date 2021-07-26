/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryServiceBySlug
// ====================================================

export interface QueryServiceBySlug_services_gallery {
  __typename: "UploadFile";
  src: string;
  label: string | null;
}

export interface QueryServiceBySlug_services_cover {
  __typename: "UploadFile";
  src: string;
}

export interface QueryServiceBySlug_services_user_contacts {
  __typename: "Contact";
  whatsapp: string | null;
}

export interface QueryServiceBySlug_services_user {
  __typename: "UsersPermissionsUser";
  username: string;
  contacts: QueryServiceBySlug_services_user_contacts[];
}

export interface QueryServiceBySlug_services_categories {
  __typename: "Category";
  name: string;
}

export interface QueryServiceBySlug_services {
  __typename: "Service";
  id: string;
  name: string;
  short_description: string | null;
  description: string | null;
  price: number | null;
  gallery: QueryServiceBySlug_services_gallery[];
  cover: QueryServiceBySlug_services_cover | null;
  user: QueryServiceBySlug_services_user | null;
  categories: QueryServiceBySlug_services_categories[];
  published_at: any | null;
}

export interface QueryServiceBySlug {
  services: QueryServiceBySlug_services[];
}

export interface QueryServiceBySlugVariables {
  slug: string;
}
