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

export interface ServiceFragment_contact {
  __typename: "Contact";
  whatsapp: string | null;
}

export interface ServiceFragment {
  __typename: "Service";
  id: string;
  name: string;
  slug: string | null;
  cover: ServiceFragment_cover | null;
  price: number | null;
  contact: ServiceFragment_contact | null;
}
