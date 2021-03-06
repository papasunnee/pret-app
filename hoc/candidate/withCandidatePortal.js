import React from "react";
import Head from "next/head";
import Router from "next/router";
import { withApollo, compose, Mutation } from "react-apollo";
import SvgLoader from "bv-react-svgloader";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import cookie from "cookie";
import redirect from "../../lib/auth/redirect";
import checkLoggedIn from "../../lib/auth/checkLoggedIn";

import { ToastContainer } from "react-toastify";
import {
  CandidateDetailsWrapper,
  CandidateDetailsContext
} from "../../contexts/CandidateDetailsContext";
import { SEND_ACTIVATION_LINK_CANDIDATE_MUTATION } from "../../lib/graphql/mutations";

import LeftNavigation from "../../components/CandidatePortal/LeftNavigation";

export default function withLayout(Child, opts = {}) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context);
      }

      //Validate loggedin user
      const { isAuthenticated } = await checkLoggedIn(context.apolloClient);
      if (!isAuthenticated) {
        if (process.browser) {
          // If not signed in, send them somewhere more useful
          document.cookie = cookie.serialize("token", "", {
            maxAge: -1, // Expire the cookie immediately
            path: "/"
          });
          document.cookie = cookie.serialize("userType", "", {
            maxAge: -1, // Expire the cookie immediately
            path: "/"
          });
        }
        let target = `/?show=signIn`;
        // let asPath = `/login`
        if (context.pathname !== "/user") {
          // target = `${target}`
          // asPath = `${asPath}?from=${context.pathname}`
        }
        redirect(context, target);
      }

      return {
        ...ChildProps,
        isAuthenticated
      };
    }

    render() {
      const { isAuthenticated } = this.props;
      if (!isAuthenticated) {
        Router.push("/");
      }
      // console.log(opts);
      const { activePage } = opts;
      return (
        <MuiThemeProvider>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <title>PRET :: Dashboard</title>
            <link
              href="/static/css/style.css"
              rel="stylesheet"
              type="text/css"
              media="all"
            />
            <link
              href="/static/css/candidatestyle.css"
              rel="stylesheet"
              type="text/css"
              media="all"
            />
            <link
              rel="shortcut icon"
              type="image/x-icon"
              href="/static/images/fav.ico"
            />
            <meta charSet="utf-8" />
          </Head>
          <CandidateDetailsWrapper>
            <div className="container">
              <div className="row mt-3 mb-5">
                <div className="col-md-2">
                  <SvgLoader src="/static/images/pret-logo-small.svg" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 float-right">
                  <CandidateDetailsContext.Consumer>
                    {({ candidate: { isActivated } }) => {
                      if (!isActivated) {
                        return (
                          <div className="alert">
                            <strong>Warning!</strong> Your account has not been
                            verified, please check your email to verify.
                            <Mutation
                              mutation={SEND_ACTIVATION_LINK_CANDIDATE_MUTATION}
                              onCompleted={({
                                candidateResendActivationLink: { email }
                              }) => {
                                console.log(
                                  `activation link was sent to ${email}`
                                );
                              }}
                              onError={error => {
                                console.log(error);
                              }}
                            >
                              {(doMutation, { data }) => (
                                <small className="resend-mail">
                                  Can't find the email?{" "}
                                  <a
                                    href="#"
                                    onClick={e => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      doMutation();
                                    }}
                                  >
                                    click here
                                  </a>{" "}
                                  to resend
                                </small>
                              )}
                            </Mutation>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            className="success"
                            style={{ textAlign: "center" }}
                          >
                            <strong>PRET</strong> Ensures you are shorlisted for
                            interview when there are jobs that requires your
                            skills.
                          </div>
                        );
                      }
                    }}
                  </CandidateDetailsContext.Consumer>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <LeftNavigation activePage={activePage} />
                </div>
                <div className="col-md-8">
                  <Child />
                </div>
              </div>
            </div>
            <span id="siteseal">
              <script
                async
                type="text/javascript"
                src="https://seal.godaddy.com/getSeal?sealID=3WM1WzVbJNVQhn75QDxKtBNHGaRcFYsuwzHuinwVeSr2bnnikIC1HRf9Nqlr"
              />
            </span>
          </CandidateDetailsWrapper>
          <ToastContainer />
        </MuiThemeProvider>
      );
    }
  }
  return WrappedComponent;
}
