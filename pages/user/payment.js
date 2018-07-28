import React, {Component, Fragment} from 'react';
// import Link from 'next/link'
import withCandidatePortal from '../../hoc/candidate/withCandidatePortal'

import PaymentButton from '../../components/CandidatePortal/PaymentButton'

import Checkbox from 'material-ui/Checkbox';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { CandidatePaymentsWrapper, CandidatePaymentsContext } from '../../contexts/CandidatePaymentsContext'


const styles = {
  customWidth: {
    width: 150,
  },
};

class PaymentPage extends Component{
    constructor(props){
        super(props)

        this.state = {
          value: 10,
          email: 'bellooladipupo41@gmail.com',
          amount: 100*100, // equals 100NGN
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
        return <div className="profile-content">
          <CandidatePaymentsWrapper>
            <div style={{backgroundColor:'white'}}>
              <h2>Payment Page</h2><hr/>
              <p>
                The unit price for PRET test is US$20. </p>
                <p>We currently do NOT have facilities to handle cash payments. Please read
                our “Terms of Use” of PRET before you proceed.
              </p>
              <div>
              <Card style={{margin: 'auto', background: 'rgba(255,242,0,0.2)'}}>
                  <CardTitle title="Purchase My Career Choice Test Code" subtitle="A service of Career Intelligence" />
                  <div className="row" style={{padding : '10px'}}>
                    <div className="col-md-6" style={{textAlign: 'center'}}>
                      <img src="/static/images/product.jpg" style={{width:"80%", border:'1px solid #b2b2b2', margin: 'auto' }} />
                    </div>
                    <div className="col-md-6">
                    <CardText>
                      <h3>PRET Test Code</h3>
                      <span className="subtitle" style={{textDecoration:'italics'}}>Know the career that suits your personality in 15 minutes for </span>
                      <span style={{letterSpacing:'2px',color:'#b2b2b2',textDecoration:'line-through', fontSize: '1.5em'}}>$20.00</span>
                      <span style={{letterSpacing:'2px',fontWeight:'bold', fontSize: '1.5em'}}>$10.00</span>
                      <CardActions>
                      <Checkbox
                        label="I agree to our terms and conditions of PRET service"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                      />
                      <PaymentButton email={this.state.email} amount={this.state.amount}/>
                      </CardActions>
                    </CardText>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div>
               
            </div>
              <CandidatePaymentsContext.Consumer>{
                ({ payments }) => <Fragment>
                  <div>
                    <h3>Payment History</h3><hr/>
                    {payments.map(payment=>(
                      <p>
                        {payment.paystackReference} - {payment.testCode && payment.testCode.code} - {payment.createdAt}
                      </p>
                    ))}
                  </div>
                </Fragment>
              }</CandidatePaymentsContext.Consumer>
          </CandidatePaymentsWrapper>
          <style jsx>{`
            span{
              display : block ;
            }
            span.subtitle{
              font-size: 14px;
              color: rgba(0, 0, 0, 0.541176);
              display: block;
            }
            p{
              font-size: 12px ;
            }
            .displayFlex{
              justify-content : space-around ;
          }
          .displayFlex > * {
              flex: 0 1 40%;
              border : 1px solid #b2b2b2 ;
              box-sizing : border-box ;
              padding : 20px ;
              border-radius : 5px ;
              margin-bottom : 30px ;
          }
          .displayFlex a{
              display : block ;
              color : #fff ;
              border-radius : 50px ;
              padding : 5px 10px ;
              background: -moz-linear-gradient(57deg, rgba(48,143,19,1) 0%, rgba(19,134,84,1) 60%, rgba(0,128,128,1) 100%);
              background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, rgba(48,143,19,1)), color-stop(60%, rgba(19,134,84,1)), color-stop(100%, rgba(0,128,128,1)));
              background: -webkit-linear-gradient(57deg, rgba(48,143,19,1) 0%, rgba(19,134,84,1) 60%, rgba(0,128,128,1) 100%);
              background: -o-linear-gradient(57deg, rgba(48,143,19,1) 0%, rgba(19,134,84,1) 60%, rgba(0,128,128,1) 100%);
              background: -ms-linear-gradient(57deg, rgba(48,143,19,1) 0%, rgba(19,134,84,1) 60%, rgba(0,128,128,1) 100%);
              background: linear-gradient(33deg, rgba(48,143,19,1) 0%, rgba(19,134,84,1) 60%, rgba(0,128,128,1) 100%);
              text-align : center ;
              width : 70px ;
              right : 0px ;
              font-size : 12px ;
              position : relative ;
              border : none ;
              transition : color linear 150ms ;
          }
          .displayFlex a:hover{
              color : #000 ;
          } 
        `}</style>
        </div>
    }
}
export default withCandidatePortal(PaymentPage, {activePage: '/payment'})
