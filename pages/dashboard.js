import React, { Component, Fragment} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import SvgLoader from 'bv-react-svgloader'


class Dashboard extends Component{
    constructor(props){
        super(props) ;
    }
    render() {
        return (
          <div>
            <Head>
              <link href="/static/css/candidatestyle.css" rel="stylesheet" type="text/css" media="all" />
            </Head>
            <div>
                <SvgLoader src='/static/images/pret-logo-small.svg'/>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link prefetch href="">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="">
                            <a>Amount</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="">
                            <a>Upload CV</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="">
                            <a>Schedule Test</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="">
                            <a>Payment</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="">
                            <a>Receipts</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="">
                            <a>Help</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>
                <div>
                    <span>Schedule Test</span>
                    <button>Schedule</button>
                </div>
                <div>
                    <span>Make Payment</span>
                    <button>Pay Now</button>
                </div>
                <div>
                    <span>Upload CV</span>
                    <button>Upload</button>
                </div>
                <div>
                    <span>Receipt</span>
                    <button>Receipt</button>
                </div>
            </div>
          </div>
        )
      }
}
export default Dashboard