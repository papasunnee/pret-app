/**
* GraphQl Candidate Mutations
*/
import gql from 'graphql-tag'

export const ACTIVATE_INSTITUTION_MUTATION = gql `
  mutation ($code: String!){
    institutionActivateAccount(code: $code) {
      isActivated
    }
  }
`

export const SIGNUP_INSTITUTION_MUTATION = gql `
mutation ($name: String!, $email: String!, $password: String!){
  institutionCreateAccount(name: $name, email: $email, password: $password){
    jwt
    name
  }
}
`
