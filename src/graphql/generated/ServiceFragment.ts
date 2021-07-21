/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ServiceFragment
// ====================================================

export interface ServiceFragment_cover {
  __typename: "UploadFile";
  url: string;
}

export interface ServiceFragment_user {
  __typename: "UsersPermissionsUser";
  name: string;
}

export interface ServiceFragment {
  __typename: "Service";
  name: string;
  slug: string | null;
  cover: ServiceFragment_cover | null;
  user: ServiceFragment_user | null;
  price: number | null;
}
