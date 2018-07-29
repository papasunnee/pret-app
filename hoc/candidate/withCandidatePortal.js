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
        // If not signed in, send them somewhere more useful
        document.cookie = cookie.serialize('token', '', {
          maxAge: -1, // Expire the cookie immediately
          path: '/'
        })
        document.cookie = cookie.serialize('userType', '', {
          maxAge: -1, // Expire the cookie immediately
          path: '/'
        })
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
            <link href="/static/css/style.css" rel="stylesheet" type="text/css" media="all" />
            <link rel="shortcut icon" type="image/x-icon" href="/static/images/fav.ico"/>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" type="text/css" media="all" />
            <meta charSet="utf-8"/>
          </Head>
          <CandidateDetailsWrapper>
            <div className="container">
              <div>
                <SvgLoader src='/static/images/pret-logo-small.svg'/>
              </div>
              <div className="app-body">
                <div className="container">
                  <div className="row profile">
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
                    <div className="row">
                      <div className="col-md-3">
                          <LeftNavigation activePage={activePage}/>
                      </div>
                      <div className="col-md-9">
                        <Child />
                      </div>
                    </div>
                    </div>
                  </div>
            </div>
          </div>
          </CandidateDetailsWrapper>
        <ToastContainer />
        <style global jsx>{`
            body {
                background: #F1F3FA;
              }
              .alert {
                padding: 20px;
                background-color: #d84a31;
                color: white;
                margin-bottom: 15px;
            }
            

              .resend-mail {
                float: right;
              }

              .profile {
                margin: 10px 0;
              }

              .profile-sidebar {
                padding: 20px 0 10px 0;
                background: #09925E;
                color : #fff ;
                box-shadow:1px 1px 10px rgba(0,0,0,0.3)
              }

              .profile-userpic img {
                float: none;
                margin: 0 auto;
                width: 50%;
                height: 50%;
                -webkit-border-radius: 50% !important;
                -moz-border-radius: 50% !important;
                border-radius: 50% !important;
              }

              .profile-usertitle {
                text-align: center;
                margin-top: 20px;
              }

              .profile-usertitle-name {
                color: #fff;
                font-size: 20px;
                font-weight: 600;
                margin-top:5px;
                margin-bottom: 7px;
              }

              .profile-usertitle-job {
                color: #b2b2b2;
                font-size: 12px;
                font-weight: 600;
                margin-bottom: 15px;
              }

              .profile-userbuttons {
                text-align: center;
                margin-top: 10px;
              }

              .profile-userbuttons .btn {
                text-transform: uppercase;
                font-size: 11px;
                font-weight: 600;
                padding: 6px 15px;
                margin-right: 5px;
              }

              .profile-userbuttons .btn:last-child {
                margin-right: 0px;
              }

              .profile-usermenu {
                margin-top: 30px;
                width: 25% ;
                float : left ;
                margin-right : 20px ;
              }

              .profile-usermenu ul li:last-child {
                border-bottom: none;
              }

              .profile-usermenu ul li a {
                font-weight: 400;
                text-indent : 20px ;
                padding : 20px ;
                display : block ;
              }
              .profile-usermenu ul li a:hover {
                color : #b2b2b2;
              }

              .profile-usermenu ul li.active {
                border-bottom: none;
              }

              .profile-usermenu ul li.active a {
                background-color: #C4C4C4;
                border-radius : 50px ;
                margin-right: -2px;
                color : #000 ;
              }
              .profile-usermenu ul li.active a:hover {
                background-color: #F0F0F0;
              }
        `}
            </style>
      </MuiThemeProvider>
    )}
  }

  return (WrappedComponent)
}
