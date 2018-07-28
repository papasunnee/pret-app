import gql from 'graphql-tag'
import { AFFILIATE_ISAUTHENTICATED_QUERY } from '../graphql/queries'
export default apolloClient => (
  apolloClient.query({
    query: AFFILIATE_ISAUTHENTICATED_QUERY
  }).then(({ data }) => {
    return { isAuthenticated: data.mccAffiliateIsAuthenticated}
  }).catch(() => {
    // Fail gracefully
    return { isAuthenticated: false }
  })
)
