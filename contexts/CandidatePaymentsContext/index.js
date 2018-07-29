import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import { PAYMENT_PAGE_QUERY } from '../../lib/graphql/queries'

import { loaderStyles } from '../../utils/styles'

export {
  CandidatePaymentsContext,
  CandidatePaymentsWrapper
}

const CandidatePaymentsContext = React.createContext({
  payments: []
});

class CandidatePaymentsWrapper extends Component {
  constructor(props){
    super(props)
    // this.toggleModal= this.toggleModal.bind(this);

    this.state = {
      user: {}
    };
  }

  render() {
    return <Query query={PAYMENT_PAGE_QUERY}>
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

        const { viewerCandidate: { candidate: { payments } } } = data;
        // console.log(candidate);
        return (
          <CandidatePaymentsContext.Provider value={{payments}}>
            {this.props.children}
          </CandidatePaymentsContext.Provider>
        )
      }}
      </Query>
  }
}
