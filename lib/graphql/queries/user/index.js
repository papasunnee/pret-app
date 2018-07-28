/**
* GraphQl User Queries
*/
import gql from 'graphql-tag'

export const USER_ISAUTHENTICATED_QUERY = gql`
  query {
    userIsAuthenticated
  }
`