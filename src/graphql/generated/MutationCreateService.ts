/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createServiceInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationCreateService
// ====================================================

export interface MutationCreateService_createService_service_cover {
  __typename: "UploadFile";
  id: string;
}

export interface MutationCreateService_createService_service {
  __typename: "Service";
  name: string;
  description: string | null;
  price: number | null;
  cover: MutationCreateService_createService_service_cover | null;
  released_at: any | null;
  contact: string | null;
}

export interface MutationCreateService_createService {
  __typename: "createServicePayload";
  service: MutationCreateService_createService_service | null;
}

export interface MutationCreateService {
  createService: MutationCreateService_createService | null;
}

export interface MutationCreateServiceVariables {
  input: createServiceInput;
}
