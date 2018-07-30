import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { withApollo, compose, Mutation } from 'react-apollo'
import SvgLoader from 'bv-react-svgloader'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import cookie from 'cookie'
import redirect from '../../lib/auth/redirect'
import checkLoggedIn from '../../lib/auth/checkLoggedIn'

import { ToastContainer } from 'react-toastify'
import { CandidateDetailsWrapper, CandidateDetailsContext } from '../../contexts/CandidateDetailsContext'
import { SEND_ACTIVATION_LINK_CANDIDATE_MUTATION } from '../../lib/graphql/mutations'

import LeftNavigation from '../../components/CandidatePortal/LeftNavigation'

export default function withLayout(Child, opts={}) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context)
      }

      //Validate loggedin user
      const {isAuthenticated} = await checkLoggedIn(context.apolloClient)
      if (!isAuthenticated) {
        if (process.browser) {
          // If not signed in, send them somewhere more useful
          document.cookie = cookie.serialize('token', '', {
            maxAge: -1, // Expire the cookie immediately
            path: '/'
          })
          document.cookie = cookie.serialize('userType', '', {
            maxAge: -1, // Expire the cookie immediately
            path: '/'
          })
        }
        let target = `/?show=signIn`
        // let asPath = `/login`
        if (context.pathname !== '/user'){
          // target = `${target}`
          // asPath = `${asPath}?from=${context.pathname}`
        }
        redirect(context, target)
      }

      return {
        ...ChildProps,
        isAuthenticated
      }
    }

    render() {
      const { isAuthenticated } = this.props;
      if (!isAuthenticated) {
        Router.push('/');
      }
      // console.log(opts);
      const { activePage } = opts;
      return (
        <MuiThemeProvider>
          <Head>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <title>PRET :: Dashboard</title>
            <link href="/static/css/style.css" rel="stylesheet" type="text/css" media="all" />
            <link href="/static/css/candidatestyle.css" rel="stylesheet" type="text/css" media="all" />
            <link rel="shortcut icon" type="image/x-icon" href="/static/images/fav.ico"/>
            <meta charSet="utf-8"/>
          </Head>
          <CandidateDetailsWrapper>
            <div className="container" style={{padding: '0' , paddingTop : '10px'}}>
              <SvgLoader src='/static/images/pret-logo-small.svg'/>
                <div className="container" style={{padding : '0'}}>
                    <CandidateDetailsContext.Consumer>{
                      ({ candidate: { isActivated } }) => {
                        if (!isActivated) {
                          return (
                            <div className="alert">
                              <strong>Warning!</strong> Your account has not been verified, please check your email to verify.
                              <Mutation mutation={SEND_ACTIVATION_LINK_CANDIDATE_MUTATION}
                                onCompleted={({candidateResendActivationLink: {email}}) => {
                                  console.log(`activation link was sent to ${email}`)
                                }}
                                onError={(error) => {
                                  console.log(error)
                                }}>{
                                  (doMutation, { data }) => <small className="resend-mail">
                                    Can't find the email? <a href="#" onClick={e=>{
                                      e.preventDefault();
                                      e.stopPropagation();
                                      doMutation();
                                    }}>click here</a> to resend
                                  </small>
                                }</Mutation>
                            </div>
                          )
                        }
                      }
                    }</CandidateDetailsContext.Consumer>
                    </div>
                  <div className="candPortal">
                    <div className="candNav">
                        <LeftNavigation activePage={activePage}/>
                    </div>
                    <div>
                      <Child />
                    </div>
                  </div>
            </div>
          </CandidateDetailsWrapper>
        <ToastContainer />
      </MuiThemeProvider>
    )}
  }
  return (WrappedComponent)
}
