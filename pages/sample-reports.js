import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import withLayout2 from '../components/withLayout2'
import QuickNavigation from '../components/QuickNavigation';
import Header from '../components/Header';


class SampleReportPage extends Component{
    render(){
        return(
            <Fragment>
                <Head>
                    <title>PRET :: Sample Reports</title>
                    
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                <Header />

                <div className="container">
                    <main>
                        <div>
                            <h2 className="themeColor">Sample Reports</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                            <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </main>
                    <section className="moreContent">

                    </section>
                    <QuickNavigation />
                </div>
            </Fragment>
        )
    }
}

export default withLayout2(SampleReportPage)