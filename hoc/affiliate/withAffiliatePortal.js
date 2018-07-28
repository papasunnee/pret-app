import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { withApollo, compose, Mutation } from 'react-apollo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import redirect from '../../lib/auth/redirect'
import checkAffiliateLoggedIn from '../../lib/auth/checkAffiliateLoggedIn'

import cookie from 'cookie'
import { ToastContainer, toast } from 'react-toastify'
import { AffiliateDetailsWrapper, AffiliateDetailsContext } from '../../contexts/AffiliateDetailsContext'
import { SEND_ACTIVATION_LINK_AFFILIATE_MUTATION } from '../../lib/graphql/mutations'

import { TOAST_STYLE } from '../../utils/common'

import LeftNavigation from '../../components/AffiliatePortal/LeftNavigation'

export default function withLayout(Child, opts={}) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context)
      }

      //Validate loggedin user
      const {isAuthenticated} = await checkAffiliateLoggedIn(context.apolloClient)
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
        // client.cache.reset().then(() => {
        //   redirect(context, target)
        // })
        let target = `/?show=signIn`
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
            <meta charSet="utf-8"/>
            {/* <link rel="icon" href="wt_62309/images/favicon.ico" type="image/x-icon"/> */}
            {/* <!-- Stylesheets--> */}
            {/* <link rel="stylesheet" href="/static/css/portal/style.css"/> */}
            {/* <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/> */}
            <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/static/css/ReactToastify.min.css" />
            {/* <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script> */}
            {/* <script src="//code.jquery.com/jquery-1.11.1.min.js"></script> */}
          </Head>
          {/* <Child /> */}
          <AffiliateDetailsWrapper>
            <div className="app">
              <div className="app-body">
                <main className="main" style={{
                  paddingTop: '24px'
                }}>
                <div className="container">
                  <div className="row profile">
                    <AffiliateDetailsContext.Consumer>{
                      ({ affiliate: { isActivated } }) => {
                        if (!isActivated) {
                          return (
                            <div className="alert alert-danger" role="alert">
                              <strong>Warning!</strong> Your account has not been verified, please check your email to verify.
                              <Mutation mutation={SEND_ACTIVATION_LINK_AFFILIATE_MUTATION}
                                onCompleted={({affiliateResendActivationLink: {email}}) => {
                                  toast(`activation link was sent to ${email}`, {...TOAST_STYLE.success});
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
                    }</AffiliateDetailsContext.Consumer>
                      <div className="col-md-3">
                          <LeftNavigation activePage={activePage}/>
                      </div>
                      <div className="col-md-9">
                        <Child />
                      </div>
                    </div>
                  </div>
              </main>
            </div>
          </div>
          </AffiliateDetailsWrapper>
        <ToastContainer />
        <style global jsx>{`
            body {
                background: #F1F3FA;
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
              }

              .profile-usermenu ul li {
                border-bottom: 1px solid #096C47;
              }

              .profile-usermenu ul li:last-child {
                border-bottom: none;
              }

              .profile-usermenu ul li a {
                color: #b2b2b2;
                font-size: 16px;
                font-weight: 400;
                padding : 20px;
              }

              .profile-usermenu ul li a i {
                margin-right: 8px;
                font-size: 14px;
              }

              .profile-usermenu ul li a:hover {
                background-color: #096C47;
                color: #fff;
              }

              .profile-usermenu ul li.active {
                border-bottom: none;
              }

              .profile-usermenu ul li.active a {
                color: #fff;
                background-color: #096C47;
                border-right: 2px solid #3EC28F;
                margin-right: -2px;
              }

              .profile-content{box-shadow:1px 1px 10px rgba(0,0,0,0.3);}
              .profile-content {
                padding: 20px;
                background: #f6f6f6;
                min-height: 600px;
                margin-bottom:30px;
              }
              .profile-content p{
                font-size : 16px ;
                line-height : 30px ;
              }
        `}
            </style>
      </MuiThemeProvider>
    )}
  }

  return (WrappedComponent)
}
