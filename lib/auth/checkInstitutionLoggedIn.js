import gql from 'graphql-tag'


export default (context, apolloClient) => (
  apolloClient.query({
    query: gql`
    query viewerEmployerQuery{
      viewerEmployer{
        institution{
          _id
        }
      }
    }
    `
  }).then(({ data }) => {
    //return loggedInUser
    return { loggedInUser: data.viewerEmployer}
  }).catch(() => {
    // Fail gracefully
    return { loggedInUser: {} }
  })
)
