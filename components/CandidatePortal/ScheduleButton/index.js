import React, { Component, Fragment } from 'react'
import { CANDIDATE_BOOK_TEST_MUTATION } from '../../../lib/graphql/mutations'
import { Mutation, withApollo } from 'react-apollo'
import SweetAlert from 'react-bootstrap-sweetalert'
import RaisedButton from 'material-ui/RaisedButton'




class ScheduleButton extends Component{

  constructor(props){
    super(props)
    this.state =
    {
      show : false,
      unbookedPayment : []
    } 
  }

  hideAlert = () => {
    this.setState({show:false})
  }

  onScheduleCompleted = (data) => {
    // Store the token in cookie
    const { recordId, record } = data.candidateBookTest
    
    console.log(data.candidateBookTest)
    // document.cookie = cookie.serialize('token', jwt, {
    //   maxAge: 30 * 24 * 60 * 60, // 30 days
    //   path: '/'
    // })
    // document.cookie = cookie.serialize('userType', userType, {
    //   maxAge: 30 * 24 * 60 * 60, // 30 days
    //   path: '/'
    // })
    // // Force a reload of all the current queries now that the user is
    // // logged in
    // this.props.client.resetStore().then(() => {
    //   // const target = this.props.url.query.from || `/user/dashboard`
    //   let target = `/user/dashboard`;
    //   userType == 'Candidate' && (target=`/user/dashboard`);
    //   userType == 'Employer' && (target=`/institution/dashboard`);
    //   userType == 'MccAffiliate' && (target=`/affiliate/dashboard`);
    //   redirect({}, target)
    // })
  }

  onLoginError = (error) => {
    // If you want to send error to external service?
    //console.log(error)
    if (error.graphQLErrors.length==0)
      toast("Something Went Wrong With your request", {...TOAST_STYLE.fail});

    error.graphQLErrors.forEach(error=>{
      switch(error.message) {
        case `password incorrect`:
        this.props.showLoginError("Incorrectw Login Details")
        break;
        case `email/user not found`:
        this.props.showLoginError("Incorrects Login Details")
        break;
        default:
        this.props.showLoginError("Please Try Again Later")
      }
    })
  }

  viewSchedule = (event, runMutation) => {
    const { candidateUpcomingTest } = this.props;
    console.log(candidateUpcomingTest)
    event.preventDefault()
    event.stopPropagation()

  }

  render(){
    return <Mutation mutation={CANDIDATE_BOOK_TEST_MUTATION}
      onCompleted={this.onScheduleCompleted}
      onError={this.onLoginError}>
      {(candidateBookTest, { data, error }) => (
        <Fragment>
          <RaisedButton
          label='VIEW SCHEDULE'
          backgroundColor = '#138F50'
          labelColor='rgb(255,255,255)'
          onClick={e=>this.viewSchedule(e, candidateBookTest)}
          />
          {/* <SweetAlert show={this.state.show} warning title="You currently have NO active payment" onConfirm={this.hideAlert}>
            Proceed to PAYMENT page to make one.
          </SweetAlert> 

          <SweetAlert 
            title={<span>HTML <small>Title</small>!</span>} 
            onConfirm={this.hideAlert}
          >
            <span>A custom <span style={{color:'#F8BB86'}}>html</span> message.</span>
          </SweetAlert> */}

         </Fragment>
      )}
    </Mutation>
  }
}
export default withApollo(ScheduleButton)