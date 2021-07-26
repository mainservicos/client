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

export interface UsersPermissionsRegisterInput {
  username: string;
  email: string;
  password: string;
}

export interface createContactInput {
  data?: ContactInput | null;
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
