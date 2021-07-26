/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateContactInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateContact
// ====================================================

export interface MutationUpdateContact_updateContact_contact {
  __typename: "Contact";
  id: string;
  whatsapp: string | null;
}

export interface MutationUpdateContact_updateContact {
  __typename: "updateContactPayload";
  contact: MutationUpdateContact_updateContact_contact | null;
}

export interface MutationUpdateContact {
  updateContact: MutationUpdateContact_updateContact | null;
}

export interface MutationUpdateContactVariables {
  input?: updateContactInput | null;
}
