// ./queries/get-lejligheder.js

import { gql } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

loadDevMessages();
loadErrorMessages();

export const GetLejligheder = gql`
  query {
    Lejligheder {
    items {
      _id
      navn
      beskrivelse
      status
      beliggenhed {
        latitude
        longitude
      }
      billeder {author url}
      vrelser
      kvadratmeter
      mnedlig_leje
    }
  }
 }
`