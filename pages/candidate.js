import React, { Component, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import withLayout2 from "../components/withLayout2";
import QuickNavigation from "../components/QuickNavigation";
import Header from "../components/Header";
import ParallaxSection from "../components/ParallaxSection";

class CandidatePage extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>PRET :: Candidate</title>
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
                  src="/static/images/candidate1.png"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </main>
        </div>
        <ParallaxSection />
        <div className="container">
          <section className="moreContent" />
          <QuickNavigation />
        </div>
      </Fragment>
    );
  }
}

export default withLayout2(CandidatePage);
