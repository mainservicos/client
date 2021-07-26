/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createContactInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationCreateContact
// ====================================================

export interface MutationCreateContact_createContact_contact {
  __typename: "Contact";
  id: string;
  whatsapp: string | null;
}

export interface MutationCreateContact_createContact {
  __typename: "createContactPayload";
  contact: MutationCreateContact_createContact_contact | null;
}

export interface MutationCreateContact {
  createContact: MutationCreateContact_createContact | null;
}

export interface MutationCreateContactVariables {
  input: createContactInput;
}
