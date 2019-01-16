import React, { Component, Fragment } from "react";
import Link from "next/link";
import cookie from "cookie";
import redirect from "../lib/auth/redirect";
import SvgLoader from "bv-react-svgloader";
import { ApolloConsumer } from "react-apollo";
import LoginModal from "./LoginModal";
import { LoginModalContext } from "../contexts/LoginModalContext";
import { USER_ISAUTHENTICATED_QUERY } from "../lib/graphql/queries";

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link prefetch href="/">
            <a className="navbar-brand d-inline-block align-top">
              <SvgLoader src="/static/images/pret-logo-small.svg" />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link prefetch href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link prefetch href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link prefetch href="/candidate">
                  <a className="nav-link">Candidate</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link prefetch href="/employer">
                  <a className="nav-link">Employer</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link prefetch href="/contact">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
              <li className="nav-item">
                <LoginModalContext.Consumer>
                  {({ open, toggleModal }) => (
                    <Fragment>
                      <LoginModal isOpen={open} close={toggleModal} />
                      <ApolloConsumer>
                        {client => (
                          <a
                            // href="#!"
                            className="nav-link"
                            onClick={async () => {
                              const {
                                data: { userIsAuthenticated }
                              } = await client.query({
                                query: USER_ISAUTHENTICATED_QUERY
                              });
                              if (userIsAuthenticated) {
                                console.log("isAuth - fetching cookies");
                                const { userType, token } = cookie.parse(
                                  document.cookie
                                );
                                if (userType && token) {
                                  let target = "/user/dashboard";
                                  if (userType == "Candidate") target = "/user/dashboard";
                                  if (userType == "Employer") target = "/institution/dashboard";
                                  redirect({}, target);
                                } else {
                                  toggleModal();
                                }
                              } else {
                                toggleModal();
                              }
                            }}
                          >
                            Login
                          </a>
                        )}
                      </ApolloConsumer>
                    </Fragment>
                  )}
                </LoginModalContext.Consumer>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}
