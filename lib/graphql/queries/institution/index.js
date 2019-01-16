/**
* GraphQl institution Queries
*/
import gql from 'graphql-tag'

export const HOME_VIEWER_INSTITUTION_QUERY = gql`
  query viewerEmployerQuery{
    viewerEmployer{
      institution{
        _id
        name
        phone
        email
      }
    }
  }
`
