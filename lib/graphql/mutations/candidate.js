/**
* GraphQl Candidate Mutations
*/
import gql from 'graphql-tag'

export const SEND_ACTIVATION_LINK_CANDIDATE_MUTATION = gql `
  mutation {
    candidateResendActivationLink{
      status
      email
    }
  }
`

export const SIGNUP_CANDIDATE_MUTATION = gql `
mutation ($firstName: String!, $lastName: String!, $email: String!, $password: String!){
  candidateCreateAccount(firstName: $firstName, lastName: $lastName, email: $email, password: $password){
    jwt
    name
  }
}
`

export const CREATE_PAYMENT_MUTATION = gql`
mutation ($paystackReference: String!) {
  candidateFindOrCreatePaymentRecord ( paystackReference: $paystackReference) {
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
`

export const CANDIDATE_BOOK_TEST_MUTATION = gql `
mutation ($payment: MongoID! , $test: MongoID!) {
  candidateBookTest(payment: $payment, test : $test){
    record {
      user
      payment
      isCancelled
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
    recordId
  }
}
`

export const CANDIDATE_UPLOAD_CV_MUTATION = gql `
mutation($record: CreateOneCVInput!){
  candidateSaveCV(record: $record){
    record{
      _id
      cvFile{
        url
      }
    }
  }
}
`
