// ./queries/get-articles.js

import { gql } from "@apollo/client";

export const GetLejligheder = gql`
  query {
    Lejligheder {
    items {
      _id
      navn
    }
  }
 }
`
