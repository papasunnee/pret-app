/**
* GraphQl Candidate Mutations
*/
import gql from 'graphql-tag'

export const SEND_ACTIVATION_LINK_AFFILIATE_MUTATION = gql `
  mutation {
    affiliateResendActivationLink{
      status
      email
    }
  }
`

export const ACTIVATE_AFFILIATE_MUTATION = gql `
  mutation ($code: String!){
    affiliateActivateAccount(code: $code) {
      isActivated
    }
  }
`

export const SIGNUP_AFFILIATE_MUTATION = gql `
mutation (
  $name: String!,
  $phone: String!,
  $email: String!,
  $password: String!,
  $workAddress: String,
  $physicalAddress: String!,
  $referee1name: String!,
  $referee1phone: String!,
  $referee2name: String!,
  $referee2phone: String!
){
  affiliateCreateAccount(
    input: {
      name: $name,
      phone: $phone,
      email: $email,
      password: $password,
      workAddress: $workAddress,
      physicalAddress: $physicalAddress,
      referee1name: $referee1name,
      referee1phone: $referee1phone,
      referee2name: $referee2name,
      referee2phone: $referee2phone
    }
){
    jwt
    name
  }
}
`

export const CREATE_COUPON_MUTATION = gql `
mutation ($coupon: String!) {
  affiliateCreateCoupon (input: { coupon: $coupon }) {
    _id
    coupon
    discount
  }
}
`
