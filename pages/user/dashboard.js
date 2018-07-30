import React, {Component} from 'react';
import Link from 'next/link'
import SvgLoader from 'bv-react-svgloader'
import withCandidatePortal from '../../hoc/candidate/withCandidatePortal'

class Dashboard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
              <h2>Candidate Portal</h2>
              <div className="displayFlex">
                <div>
                    <span>Make Payment</span>
                    <SvgLoader src='/static/images/dashboard/payment.svg'/>
                    <hr />
                    <Link prefetch href="/user/payment">
                        <a>Pay Now</a>
                    </Link>
                </div>
                <div>
                    <span>Receipt</span>
                    <SvgLoader src='/static/images/dashboard/receipts.svg'/>
                    <hr />
                    <Link prefetch href="/user/receipt">
                        <a>Receipt</a>
                    </Link>
                </div>
                <div>
                    <span>Schedule Test</span>
                    <SvgLoader src='/static/images/dashboard/schedule.svg'/>
                    <hr />
                    <Link prefetch href="/user/schedule-test">
                        <a>Schedule</a>
                    </Link>
                </div>
                <div>
                    <span>Upload CV</span>
                    <SvgLoader src='/static/images/dashboard/upload.svg'/>
                    <hr />
                    <Link prefetch href="/user/upload-cv">
                        <a>Upload</a>
                    </Link>
                </div>
            </div>
        </div>
    }
}
export default withCandidatePortal(Dashboard, {activePage: '/'})
