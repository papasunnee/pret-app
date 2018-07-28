import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import withLayout2 from '../components/withLayout2'
import SvgLoader from 'bv-react-svgloader'
import QuickNavigation from '../components/QuickNavigation';
import Header from '../components/Header';


class ContactPage extends Component{
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
                <SvgLoader src='/static/images/contact.svg' className="svg-logo"/>
                    <section style={{height:'400px'}}>
                        <h2 className="themeColor" style={{textAlign: 'center'}}>WE ARE AVAILABLE 24/7, 365 DAYS</h2>
                        <div className="displayFlex contactForm">
                            <div>
                               <h3 className="themeColor">Contact Form</h3>
                               <form>
                                    <label>Name</label>
                                    <input type="text"   />
                                    <label>Email</label>
                                    <input type="text"   />
                                    <label>Subject</label>
                                    <input type="text"   />
                                    <label>Message</label>
                                    <textarea></textarea>
                                    <button>SEND</button>
                                </form> 
                            </div>
                            <div>
                                <h3 className="themeColor">Our Address</h3>
                                <p>
                                Address 1Frances Street, London, United Kingdom
                                Phone+1234 567 567
                                Address 2Frances St, Woolwich, London SE18, UK
                                Email
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="container">
                    <QuickNavigation />
                </div>
            </Fragment>
        )
    }
}

export default withLayout2(ContactPage)