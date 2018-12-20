import React, { Component, Fragment } from "react";
import Head from "next/head";
import Link from "next/head";
import ParallaxSection from "../components/ParallaxSection";
import withLayout2 from "../components/withLayout2";
import SvgLoader from "bv-react-svgloader";
import QuickNavigation from "../components/QuickNavigation";
import Header from "../components/Header";

class EmployerPage extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>PRET :: Employer</title>
        </Head>
        <Header />
        <div className="container">
          <main>
            <div className="leftpane">
              <h2 className="themeColor">Let's Get Started</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="enter">
              <div className="shadow">
                <img
                  className="demo"
                  src="/static/images/employer1.png"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </main>
        </div>

        <ParallaxSection />

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2
                  className="themeColor text-center mb-3"
                  style={{ width: "70%" }}
                >
                  The Consequences of Hiring an Unfit Candidate Far Outweighs
                  the Cost of PRET
                </h2>
              </div>
              <div className="col-md-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="col-md-6">
                <img className="img-fluid" src="/static/images/employer3.png" />
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-12"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  className="img-fluid float-left"
                  src="/static/images/pret-symbol.png"
                />
                <p>
                  <a>
                    REGISTER FOR PRET, OBTAIN AN ACCESS CODE AND BE ABLE TO
                    VERIFY AND COMPARE PRET SCORES OF YOUR JOB APPLICANTS
                    ANYTIME
                  </a>
                </p>
                <div className="clearfix" />
              </div>
            </div>
            <QuickNavigation />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default withLayout2(EmployerPage);
