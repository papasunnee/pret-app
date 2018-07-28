/**
* GraphQl Candidate Queries
*/
import gql from 'graphql-tag'

export const CANDIDATE_ISAUTHENTICATED_QUERY = gql`
  query {
    candidateIsAuthenticated
  }
`

export const HOME_VIEWER_CANDIDATE_QUERY = gql`
  query {
    price{
      _id
      pretPrice
    }
    viewerPretCandidate {
      candidate {
        _id
        name
        email
        isActivated
      }
    }
  }
`

export const PAYMENT_PAGE_QUERY = gql`
query ViewerPretCandidateQuery{
  viewerPretCandidate {
    candidate {
      _id
      payments {
        _id
        paystackReference
        createdAt
      }
    }
  }
}
`

export const CANDIDATE_FIND_COUPON_QUERY = gql`
  query($coupon: String!){
    candidateFindCoupon(coupon: $coupon){
      _id
      discount
    }
  }
`
