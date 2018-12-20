import React, {Component, Fragment} from 'react'
import { Table } from 'react-bootstrap'
import { CandidateSchedulesWrapper, CandidateSchedulesContext } from '../../contexts/CandidateSchedulesContext'
import Link from "next/link"
import withCandidatePortal from '../../hoc/candidate/withCandidatePortal'
import ScheduleButton from '../../components/CandidatePortal/ScheduleButton'
import ScheduleButton2 from '../../components/CandidatePortal/ScheduleButton/index2'
import {CandidateDetailsContext} from '../../contexts/CandidateDetailsContext'

class ScheduleTestPage extends Component{
    constructor(props){
        super(props)

        this.state = {
          value: 10,
          //email: 'bellooladipupo41@gmail.com',
          //amount: 100*100, // equals 100NGN
          coupon : '',
          checked: false
        };
    }

    updateCheck() {
      this.setState((oldState) => {
        return {
          checked: !oldState.checked,
        };
      });
    }


    handleChange = (event, index, value) => {
      this.setState({value});
    };

    render(){
        return <div>
             <CandidateSchedulesWrapper>
                <CandidateSchedulesContext.Consumer>{
                  ({ candidateUpcomingTests }) => <Fragment>  
                                      
                    {candidateUpcomingTests.length == 0 &&  
                      <div style={{marginTop: '100px', textAlign: 'center'}}>
                        <h3>We have not Scheduled any PRET test, for now</h3><br/>
                          <a>Please, kindly check back again</a>
                      </div>
                    }
                    {candidateUpcomingTests.length > 0 &&  
                    <Table responsive hover style={{width: '100%'}}>
                      <thead style={{backgroundColor: '#b2b2b2'}}>
                        <tr>
                          <th>#</th>
                          <th>Location</th>
                          <th>Capacity</th>
                          <th>Date</th>
                          <th>Schedule</th>
                        </tr>
                      </thead>
                      <tbody>
                        {candidateUpcomingTests.map((test, index)=>(
                          <tr>
                            <td>{++index}</td>
                            <td>{test.location.name}</td>
                            <td>{test.capcacity}</td>
                            <td>{test.test_date}</td>
                            <td>{test.isBooked ? <ScheduleButton candidateUpcomingTest={test} />: 
                              <CandidateDetailsContext.Consumer>{({ candidate: { payments } }) => <Fragment>
                                <ScheduleButton2 testId={test._id} candidatePayments={payments}  />
                              </Fragment>}</CandidateDetailsContext.Consumer> 
                            }</td>
                          </tr>
                        ))}
                        </tbody>
                    </Table>
                    }
                </Fragment>
              }</CandidateSchedulesContext.Consumer>
          </CandidateSchedulesWrapper>
          <style jsx>{
            `
            .btn{
              display: inline-block;
              font-weight: 400;
              text-align: center;
              white-space: nowrap;
              vertical-align: middle;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              border: 1px solid transparent;
              padding: 0.375rem 0.75rem;
              font-size: 0.75rem;
              line-height: 1.5;
              border-radius: 0.25rem;
              transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            }
            .btn-success {
              color: #fff;
              background-color: #28a745;
              border-color: #28a745;
            }
            .btn-success:hover {
              color: #fff;
              background-color: #218838;
              border-color: #1e7e34;
            }
            
            .btn-success:focus, .btn-success.focus {
              box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
            }
            .btn-danger {
              color: #fff;
              background-color: #dc3545;
              border-color: #dc3545;
            }
            
            .btn-danger:hover {
              color: #fff;
              background-color: #c82333;
              border-color: #bd2130;
            }
            
            .btn-danger:focus, .btn-danger.focus {
              box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
            }
            
            `
          }
          </style>
        </div>
    }
}
export default withCandidatePortal(ScheduleTestPage, {activePage: '/schedule-test'})




