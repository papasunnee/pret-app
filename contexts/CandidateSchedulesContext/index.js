import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import { CANDIDATE_UPCOMING_TESTS } from '../../lib/graphql/queries'

import { loaderStyles } from '../../utils/styles'

export {
  CandidateSchedulesContext,
  CandidateSchedulesWrapper
}

const CandidateSchedulesContext = React.createContext({
  schedules: []
});

class CandidateSchedulesWrapper extends Component {
  constructor(props){
    super(props)
    // this.toggleModal= this.toggleModal.bind(this);

    this.state = {
      user: {}
    };
  }

  render() {
    return <Query query={ CANDIDATE_UPCOMING_TESTS }>
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
        const { candidateUpcomingTests } = data;
        return (
          <CandidateSchedulesContext.Provider value={{candidateUpcomingTests}}>
            {this.props.children}
          </CandidateSchedulesContext.Provider>
        )
      }}
      </Query>
  }
}
