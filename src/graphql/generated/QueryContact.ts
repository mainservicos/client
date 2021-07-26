/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryContact
// ====================================================

export interface QueryContact_contacts {
  __typename: "Contact";
  id: string;
  whatsapp: string | null;
}

export interface QueryContact {
  contacts: QueryContact_contacts[];
}

export interface QueryContactVariables {
  identifier: string;
}
