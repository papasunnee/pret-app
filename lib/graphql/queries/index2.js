import { gql } from 'apollo-boost'

// NOTE returns true if candidate is authenticated and false otherwise
export const CANDIDATE_ISAUTHENTICATED_QUERY = gql`
  query {
    candidateIsAuthenticated
  }
`
// returns details of candidate making the request
export const HOME_VIEWER_CANDIDATE_QUERY = gql`
  query {
    viewerCandidate {
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
  query ViewerCandidateQuery{
    viewerCandidate {
      candidate {
        _id
        payments {
          _id
          paystackReference
          price
          coupon
          amount
          currency
          createdAt
          testCode {
            _id
            code
          }
        }
      }
    }
  }
`

