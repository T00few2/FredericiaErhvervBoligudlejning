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
      billeder {author url}
    }
  }
 }
`