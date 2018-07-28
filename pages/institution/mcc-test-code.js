import React, {Component} from 'react';
// import Link from 'next/link'
import withCandidatePortal from '../../hocs/candidate/withCandidatePortal'

class MccTestCode extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="profile-content">
          <div>
              <h2>MCC Test Code</h2><hr/>
              <p>
                You should receive your 16 digit MCC test code in your e-mail inbox
                folder immediately after your payment has been received. The test
                code is unique to yourself alone and cannot be used twice and should
                not be revealed to third party. You are bound by the “Terms of Use” for
                MCC and its partner.
              </p>
              <p>
                You will have to make a FRESH payment, if you
                require replacement code because, your original code has been
                misplaced or destroyed. Please follow the instructions in your test code
                letter to complete the MCC test.
              </p>
          </div>
        </div>
    }
}
export default withCandidatePortal(MccTestCode, {activePage: '/test'})
