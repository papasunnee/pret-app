import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import { HOME_VIEWER_CANDIDATE_QUERY } from '../../lib/graphql/queries'

export {
  IndexPageContext,
  IndexPageProvider
}

const IndexPageContext = React.createContext({
  user: {}
});

const IndexPageProvider = (props) => (
  <Query query={HOME_VIEWER_CANDIDATE_QUERY}>
    {({ loading, error, data }) => {
      // NOTE your custom loading animation should go here if you have one
      if (loading)
        return <Fragment>
          <div className="loader"></div>
          <style jsx>{`
                .loader {
                    border: 3px solid #f3f3f3;
                    border-top: 3px solid #0c6053;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    animation: spin 1s linear infinite;
                    margin : 50% ;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </Fragment>;
      if (error) {
        console.log(error);
        return <div>There was an error contacting the server</div>
      }

      const { viewerCandidate } = data;
      // console.log(viewerCandidate);

      return (
        <IndexPageContext.Provider value={{ viewerCandidate }}>
          {props.children}
        </IndexPageContext.Provider>
      )
    }}
  </Query>
)
