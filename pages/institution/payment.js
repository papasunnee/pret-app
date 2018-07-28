import React, {Component, Fragment} from 'react';
// import Link from 'next/link'
import withCandidatePortal from '../../hocs/candidate/withCandidatePortal'

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
            <div>
              <h2>Payment Page</h2><hr/>
              <p>
                The unit price for MCC test code US$20. You may opt for other optional
                services on the MCC platform such as the 1 hour telephone or video
                from our dedicated career coaches. Career Coach Service on this
                platform is only available to those who have purchased the MCC test
                code. <br/>We currently do NOT have facilities to handle cash payments. You
                cannot make a payment without prior registration on the MCC
                platform. You are bound by the “Terms of Use” of MCC. You will
                receive an online receipt, acknowledgement and your MCC test code
                once your payment is received.
              </p>
            </div>
            <div className="row" style={{margin: 'auto'}}>
                <Card style={{margin: 'auto', background: 'rgba(255,242,0,0.2)'}}>
                  <CardTitle title="Purchase My Career Choice Test Code" subtitle="A service of Career Intelligence" />
                  <div className="row" style={{padding : '10px'}}>
                    <div className="col-md-6" style={{textAlign: 'center'}}>
                      <img src="/static/images/product.jpg" style={{width:"80%", border:'1px solid #b2b2b2', margin: 'auto' }} />
                    </div>
                    <div className="col-md-6">
                    <CardText>
                      <h3>MCC Test Code</h3>
                      <span className="subtitle" style={{textDecoration:'italics'}}>Know the career that suits your personality in 15 minutes for </span>
                      <span style={{letterSpacing:'2px',color:'#b2b2b2',textDecoration:'line-through', fontSize: '1.5em'}}>$20.00</span>
                      <span style={{letterSpacing:'2px',fontWeight:'bold', fontSize: '1.5em'}}>$10.00</span>
                      <CardActions>
                        {/* <SelectField
                          floatingLabelText="Select Currency"
                          value={this.state.value}
                          onChange={this.handleChange}
                          maxHeight={200}
                          style={styles.customWidth}
                          >
                            <MenuItem value={null} primaryText="" />
                            <MenuItem value={"USD"} primaryText="USD" />
                            <MenuItem value={"POUNDS"} primaryText="POUNDS" />
                            <MenuItem value={"NAIRA"} primaryText="NAIRA" />
                          </SelectField>

                       <RaisedButton primary={true} label="Pay NOW" /> */}
                      <Checkbox
                        label="Agree to our terms and conditions"
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
        `}</style>
        </div>
    }
}
export default withCandidatePortal(PaymentPage, {activePage: '/payment'})
