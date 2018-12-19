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
  pretPrice{
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
        _id
        createdAt
        transactionDate
        paystackReference
        price
        isBooked
        madeBy
        coupon
        amount
        currency
      }
    }
  }
}
`


export const PAYMENT_PAGE_QUERY = gql`
  query ViewerCandidateQuery{
    currentTime
    viewerCandidate {
      candidate {
        _id
        payments(sort: CREATEDAT_DESC){
          _id
          paystackReference
          createdAt
          transactionDate
          amount
          currency
          testCode {
            _id
            code
          }
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

export const CANDIDATE_UPCOMING_TESTS = gql`
  query{
    candidateUpcomingTests {
      _id
      locationId
      location{
        name
      }
      capcacity
      isPast
      testDate
      createdAt
      createdBy
      updatedAt
      updatedBy
      test_date
      isBooked
    }
  }
`