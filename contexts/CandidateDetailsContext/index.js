import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import { HOME_VIEWER_CANDIDATE_QUERY } from '../../lib/graphql/queries'

import { loaderStyles } from '../../utils/styles'

export {
  CandidateDetailsContext,
  CandidateDetailsWrapper
}

const CandidateDetailsContext = React.createContext({
  user: {}
});

class CandidateDetailsWrapper extends Component {
  constructor(props){
    super(props)
    // this.toggleModal= this.toggleModal.bind(this);

    this.state = {
      user: {}
    };
  }

  render() {
    return <Query query={HOME_VIEWER_CANDIDATE_QUERY}>
      {({loading, error, data}) => {
        if (loading)
          return <Fragment>
            <div className="loader"></div>
            <style jsx>{`${loaderStyles}`}</style>
          </Fragment>;
        if (error) {
          console.log(error);
          return `There was an error contacting the server`;
        }

        const { viewerCandidate: { candidate }, price } = data;
        // console.log(candidate);
        return (
          <CandidateDetailsContext.Provider value={{ candidate, price }}>
            {this.props.children}
          </CandidateDetailsContext.Provider>
        )
        }}
      </Query>
  }
}
