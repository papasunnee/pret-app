import React, { Fragment } from "react";
import Link from "next/link";
import { ApolloConsumer } from "react-apollo";
import LoginModal from "./LoginModal";
import { LoginModalContext } from "../contexts/LoginModalContext";
import { USER_ISAUTHENTICATED_QUERY } from "../lib/graphql/queries";

export default props => {
  return (
    <section>
      <div className="container">
        <h2 className="themeColor">Quick Navigate</h2>
        <div className="row navigateSection">
          <div className="col-md-4">
            <ul>
              <li>
                <Link prefetch href="/home">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/candidate">
                  <a>Candidate</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <LoginModalContext.Consumer>
                  {({ open, toggleModal }) => (
                    <Fragment>
                      <LoginModal isOpen={open} close={toggleModal} />
                      <ApolloConsumer>
                        {client => (
                          <a
                            href="#!"
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
                                  let target = `/user/dashboard`;
                                  userType == "Candidate" &&
                                    (target = `/user/dashboard`);
                                  userType == "Institution" &&
                                    (target = `/institution/dashboard`);
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
          <div className="col-md-4">
            <ul>
              <li>
                <Link prefetch href="/jobs">
                  <a>Jobs</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/faqs">
                  <a>FAQs</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/press-release">
                  <a>Press Release</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/refunds-and-cancellation">
                  <a>Refunds & Cancellation</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/strategic-partners">
                  <a>Strategic Partners</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li>
                <Link prefetch href="/sample-question">
                  <a>Sample Questions</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/sample-reports">
                  <a>Sample Reports</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/testimonials">
                  <a>Testimonials</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/events">
                  <a>Events</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/newsletter-articles">
                  <a>Newsletter Articles</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
