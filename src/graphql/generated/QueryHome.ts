/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTUSERRIBBON_COLOR, ENUM_COMPONENTUSERRIBBON_SIZE } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_banners_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_banners_button {
  __typename: "ComponentUserButton";
  label: string | null;
  link: string;
}

export interface QueryHome_banners_ribbon {
  __typename: "ComponentUserRibbon";
  text: string | null;
  color: ENUM_COMPONENTUSERRIBBON_COLOR | null;
  size: ENUM_COMPONENTUSERRIBBON_SIZE | null;
}

export interface QueryHome_banners {
  __typename: "Banner";
  image: QueryHome_banners_image | null;
  title: string;
  subtitle: string;
  button: QueryHome_banners_button | null;
  ribbon: QueryHome_banners_ribbon | null;
}

export interface QueryHome_newServices_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_newServices_user {
  __typename: "UsersPermissionsUser";
  name: string;
}

export interface QueryHome_newServices {
  __typename: "Service";
  name: string;
  slug: string | null;
  cover: QueryHome_newServices_cover | null;
  user: QueryHome_newServices_user | null;
  price: number | null;
}

export interface QueryHome {
  banners: QueryHome_banners[];
  newServices: QueryHome_newServices[];
}
