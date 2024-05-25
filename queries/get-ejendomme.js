// ./queries/get-ejendomme.js

import { gql } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

loadDevMessages();
loadErrorMessages();

export const GetEjendomme = gql`
  query {
    Ejendomme(limit:100) {
    items {
      _id
      navn
      status
      beliggenhed {
        latitude
        longitude
      }
      billeder {author url}
    }
  }
 }
`