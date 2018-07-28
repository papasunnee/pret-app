import React, {Component} from 'react';
// import Link from 'next/link'
import withCandidatePortal from '../../hocs/candidate/withCandidatePortal'

class CareerCoach extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="profile-content">
          <div>
              <h2>Career Coach</h2><hr/>
              <p>
                MCC Career Coaches specializes in advising clients on ideal career
                choices, by assisting the client in understanding and applying the MCC
                test results. We have two ways of offering MCC Career Coaching, by
                telephone and by video.
              </p>
              <p>
                Your dedicated MCC Career Coach will contact
                you directly once your payment has been received. You must have
                accessible phone line for telephone advice and you must have access to
                a smart phone with camera for video coaching. We currently do not
                offer MCC career coaching on a face to face basis.
              </p>
          </div>
        </div>
    }
}
export default withCandidatePortal(CareerCoach, {activePage: '/career-coach'})
