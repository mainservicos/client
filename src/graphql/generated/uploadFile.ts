/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: uploadFile
// ====================================================

export interface uploadFile_upload {
  __typename: "UploadFile";
  id: string;
  created_at: any;
  updated_at: any;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any | null;
  hash: string;
  ext: string | null;
  mime: string;
  size: number;
  url: string;
}

export interface uploadFile {
  upload: uploadFile_upload;
}

export interface uploadFileVariables {
  refId?: string | null;
  ref?: string | null;
  field?: string | null;
  file: any;
}
