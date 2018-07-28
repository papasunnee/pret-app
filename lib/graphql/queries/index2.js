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
  query ViewerCandidateQuery{
    viewerPretCandidate {
      candidate {
        _id
        payments {
          _id
          paystackReference
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
