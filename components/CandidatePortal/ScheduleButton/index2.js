import React, { Component, Fragment } from 'react'
import { CANDIDATE_BOOK_TEST_MUTATION } from '../../../lib/graphql/mutations'
import { CANDIDATE_UPCOMING_TESTS, HOME_VIEWER_CANDIDATE_QUERY } from '../../../lib/graphql/queries'
import { Mutation, withApollo } from 'react-apollo'
import SweetAlert from 'react-bootstrap-sweetalert'
import RaisedButton from 'material-ui/RaisedButton'




class ScheduleButton2 extends Component{

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
    //const { recordId, record } = data.candidateBookTest
    console.log(data)
  }

  onScheduleError = (error) => {
    // If you want to send error to external service?
    console.log(error)
    if (error.graphQLErrors.length==0)
    {

    }
  }

  doSchedule = (event, runMutation) => {
    const { candidatePayments, testId } = this.props;
    event.preventDefault()
    event.stopPropagation()
    // clg
    if(candidatePayments.length < 1 ){ 
      this.setState({show:true})
    }
    else{
      candidatePayments.map((candidatePayment) =>{
        //console.log('ubk',candidatePayment.isBooked)
        if(!candidatePayment.isBooked){
          this.setState({unbookedPayment : this.state.unbookedPayment.push(candidatePayment)}) ;
        }
      })
      if(this.state.unbookedPayment.length==0){
        this.setState({show:true})
      }
      else{
        console.log('this.state.unbookedPayment[0]')
        console.log(this.state.unbookedPayment[0])
      //console.log(testId)
          runMutation({
            variables: {
                payment: this.state.unbookedPayment[0]._id,
                test: testId
            }
          })
      }
    }
  }

  render(){
    return <Mutation mutation={CANDIDATE_BOOK_TEST_MUTATION}
      onCompleted={this.onScheduleCompleted}
      onError={this.onScheduleError}
      update={(proxy, { data : { candidateBookTest } }) => {
        // Read the data from our cache for this query.
        const data = proxy.readQuery({ query: CANDIDATE_UPCOMING_TESTS });

        // Add the new schedule to CANDIDATE_UPCOMING_TESTS
        let testIndex;
        const test = data.candidateUpcomingTests.find((test, index) => {
          if (test._id==this.props.testId){
            testIndex = index;
            return true;
          }
        });
        test.isBooked=true;
        data.candidateUpcomingTests[testIndex] = test;

        const candidateData = proxy.readQuery({ query: HOME_VIEWER_CANDIDATE_QUERY });
        console.log('candidateData')
        const { viewerCandidate: { candidate: { payments } } } = candidateData;
        
        let paymentIndex;
        const payment = payments.find((payment, index) => {
          if (payment._id==candidateBookTest.record.payment){
            paymentIndex = index;
            return true;
          }
        });
        payment.isBooked=true;
        candidateData.viewerCandidate.candidate.payments[paymentIndex] = payment;


        // Write our data back to the cache.
        proxy.writeQuery({ query: HOME_VIEWER_CANDIDATE_QUERY, data: candidateData });
        proxy.writeQuery({ query: CANDIDATE_UPCOMING_TESTS, data });
      }}
      >
      {(candidateBookTest, { data, error }) => (
        <Fragment>
          <RaisedButton
          label='Schedule Now'
          backgroundColor = '#DC4900'
          labelColor='rgb(255,255,255)'
          onClick={e=>this.doSchedule(e, candidateBookTest)}
          />
          <SweetAlert show={this.state.show} warning title="You currently have NO active payment" onConfirm={this.hideAlert}>
            Proceed to PAYMENT page to make one.
          </SweetAlert>
         </Fragment>
      )}
    </Mutation>
  }
}
export default withApollo(ScheduleButton2)