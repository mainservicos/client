/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ENUM_COMPONENTUSERRIBBON_COLOR {
  primary = "primary",
  secondary = "secondary",
}

export enum ENUM_COMPONENTUSERRIBBON_SIZE {
  normal = "normal",
  small = "small",
}

export interface ContactInput {
  facebook?: string | null;
  whatsapp?: string | null;
  user?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface InputID {
  id: string;
}

export interface ServiceInput {
  name: string;
  short_description?: string | null;
  description?: string | null;
  price?: number | null;
  slug?: string | null;
  cover?: string | null;
  gallery?: (string | null)[] | null;
  categories?: (string | null)[] | null;
  address?: string | null;
  released_at?: any | null;
  user?: string | null;
  contact?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface UsersPermissionsRegisterInput {
  username: string;
  email: string;
  password: string;
}

export interface createContactInput {
  data?: ContactInput | null;
}

export interface createServiceInput {
  data?: ServiceInput | null;
}

export interface editContactInput {
  facebook?: string | null;
  whatsapp?: string | null;
  user?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface updateContactInput {
  where?: InputID | null;
  data?: editContactInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
