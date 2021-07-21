/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTUSERRIBBON_COLOR, ENUM_COMPONENTUSERRIBBON_SIZE } from "./globalTypes";

// ====================================================
// GraphQL fragment: BannerFragment
// ====================================================

export interface BannerFragment_image {
  __typename: "UploadFile";
  url: string;
}

export interface BannerFragment_button {
  __typename: "ComponentUserButton";
  label: string | null;
  link: string;
}

export interface BannerFragment_ribbon {
  __typename: "ComponentUserRibbon";
  text: string | null;
  color: ENUM_COMPONENTUSERRIBBON_COLOR | null;
  size: ENUM_COMPONENTUSERRIBBON_SIZE | null;
}

export interface BannerFragment {
  __typename: "Banner";
  image: BannerFragment_image | null;
  title: string;
  subtitle: string;
  button: BannerFragment_button | null;
  ribbon: BannerFragment_ribbon | null;
}
