import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import withLayout2 from '../components/withLayout2'
import SvgLoader from 'bv-react-svgloader'
import QuickNavigation from '../components/QuickNavigation';
import Header from '../components/Header';


class EmployerPage extends Component{
    render(){
        return(
            <Fragment>
                <Head>
                    <title>PRET :: Employer</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                <Header />
                <div className="container">
                    <main style={{height:'400px'}}>
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
                        <div className="shadow" style={{ display:'absolute', marginTop:'300px' , zIndex: '3'}}>
                            <SvgLoader src='/static/images/employer.svg' className="svg-logo"/>
                        </div>
                        </div>
                    </main>
                </div>

                <section className="wrapper">
                    <div className="displayFlex">
                        <div>
                            <SvgLoader src='/static/images/employer2.svg' className="svg-logo"/>   
                        </div>
                        <div className="captionMessage">
                            <p>Job Applications, Resumes and Interviews are Subjective, PRET Adds an Objective Dimension to your Recruitment Process, Minimising the Risk of Hiring an Unfit Candidate</p>
                            <a className="readMore">Read More</a>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <section>
                        <h2 className="themeColor" style={{margin : '40px auto', textAlign:'center'}}>
                        The Consequences of Hiring an Unfit Candidate Far Outweighs the Cost of PRET
                        </h2>
                        <div className="displayFlex">
                            <div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <div>
                                <SvgLoader src='/static/images/employer3.svg' className="svg-logo"/>   
                            </div>
                        </div>
                        
                        <div className="displayFlex">
                            <div>
                                <SvgLoader src='/static/images/pret-symbol.svg' className="svg-logo"/>   
                            </div>
                            <h2 style={{color:'#308F13'}}>
                            REGISTER FOR PRET, OBTAIN AN ACCESS CODE AND BE ABLE TO VERIFY AND COMPARE PRET SCORES OF YOUR JOB APPLICANTS ANYTIME
                            </h2>
                            
                        </div>
                    </section>
                    <QuickNavigation />
                </div>
                

               
            </Fragment>
        )
    }
}

export default withLayout2(EmployerPage)