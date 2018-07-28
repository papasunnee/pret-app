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
                    <Link prefetch href="#">
                        <a>Receipt</a>
                    </Link>
                </div>
                <div>
                    <span>Schedule Test</span>
                    <SvgLoader src='/static/images/dashboard/schedule.svg'/>
                    <hr />
                    <Link prefetch href="#">
                        <a>Schedule</a>
                    </Link>
                </div>
                <div>
                    <span>Upload CV</span>
                    <SvgLoader src='/static/images/dashboard/upload.svg'/>
                    <hr />
                    <Link prefetch href="#">
                        <a>Upload</a>
                    </Link>
                </div>
                
            </div>
            <style jsx>{`
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
            `}
            </style>
        </div>
    }
}
export default withCandidatePortal(Dashboard, {activePage: '/'})
