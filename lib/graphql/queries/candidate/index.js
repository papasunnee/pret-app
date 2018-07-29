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
    currency
    symbol
  }
  viewerCandidate {
    candidate {
      _id
      name
      firstName
      lastName
      phone
      email
      isActivated
      payments{
        price
        coupon
        transactionDate
        paystackReference
      }
    }
  }
}
`

export const PAYMENT_PAGE_QUERY = gql`
query viewerCandidateQuery{
  viewerCandidate {
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
