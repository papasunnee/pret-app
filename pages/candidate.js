import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import withLayout2 from '../components/withLayout2'
import SvgLoader from 'bv-react-svgloader'
import QuickNavigation from '../components/QuickNavigation';
import Header from '../components/Header';


class CandidatePage extends Component{
    render(){
        return(
            <Fragment>
                <Head>
                    <title>PRET :: Candidate</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                <Header />

                <div className="container">
                    <main>
                        <div className="leftpane">
                            <h2 className="themeColor">Let's Get Started</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                            <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="enter">
                        <div className="shadow" style={{ display:'absolute', marginTop:'100px' , zIndex: '3'}}>
                            <SvgLoader src='/static/images/candidate.svg' className="svg-logo"/>
                        </div>
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

export default withLayout2(CandidatePage)