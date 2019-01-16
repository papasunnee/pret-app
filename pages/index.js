import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import withLayout from '../components/withLayout'


class HomePage extends Component{
    render(){
        return(
            <Fragment>
                <Head>
                    <title>PRET :: Home</title>
                    
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                <div className="container">
                    <header className="main">
                        <h2>WELCOME TO</h2>
                        {/* <SvgLoader src='/static/images/pret-logo.svg' className="svg-logo"/> */}
                        <img className="img-responsive" src="/static/images/pretlogo.png" />
                    </header>
                    <main>
                        <div className="leftpane">
                            <h2>What is PRET?</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                            <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="enter" >
                            <Link prefetch href="/candidate">
                                <div className="enterCandidate">
                                    <h1><span>Enter as </span> CANDIDATE</h1>
                                </div>
                            </Link>
                            <Link prefetch href="/employer">
                                <div className="enterEmployer">
                                    <h1><span>Enter as </span> EMPLOYER</h1>
                                </div>
                            </Link>

                        </div>
                    </main>
                </div>
            </Fragment>
        )
    }
}

export default withLayout(HomePage)