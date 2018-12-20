import React, { Component, Fragment } from "react";
import Head from "next/head";
import ComponentOfPret from "../components/ComponentOfPret";
import withLayout2 from "../components/withLayout2";
import SvgLoader from "bv-react-svgloader";
import QuickNavigation from "../components/QuickNavigation";
import Video from "../components/Video";
import Header from "../components/Header";

class EmployerPage extends Component {
  render() {
    return (
      <Fragment>
        <title>PRET :: About</title>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header />
        <div className="container">
          <main>
            <div className="col-md-8">
              <h2 className="themeColor">What is PRET?</h2>
              <p>
                PRET is the most rigorous and credible pre-employment assessment
                program in Africa comprising aptitude, personality and job
                specific skills tests. PRET is fast emerging as the leading
                assessment program used by thousands of small, medium and large
                multinational companies seeking quality talents and using it as
                a mandatory pre-employment testing program for entry level
                positions. PRET is most effective in opening up job
                opportunities for graduate level positions in sectors like IT,
                Sciences, Engineering, Banking, Education, Retail, Customer
                Services, Sales and Marketing, Healthcare. PRET is very precise
                ensuring candidates are assessed in relevant skills they will
                require in the work place.
              </p>
              <p>
                PRET IS STANDARDISED, and scores can be quickly compared across
                multiple candidates allowing employers and recruiters to quickly
                generate a shortlist of good candidates. By performing well in
                PRET, a good candidate can stand out amongst their peers. PRET
                is inherently fair since every test taker is evaluated on same
                parameters. Hence hiring happens strictly on merit. PRET
                accesses both advertised and unadvertised job opportunities,
                ensuring companies gain quick access to PRET scores and
                shortlist candidates for interviews. PRET allows employers to
                predict future job performances of job applicants before they
                are employed.
              </p>
            </div>
            <div
              className="col-md-4"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img className="img-fluid" src="/static/images/about.png" />
            </div>
          </main>
          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div
                    style={{
                      borderRadius: "20px 20px 0px 0px",
                      border: "2px solid #000",
                      padding: "50px auto"
                    }}
                  >
                    <h2 style={{ marginLeft: "10px" }}>PRET</h2>
                    <Video />
                  </div>
                </div>

                <div
                  className="col-md-4"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <h2 className="themeColor" style={{ textAlign: "center" }}>
                    Check Out video for more information
                  </h2>
                </div>
              </div>
            </div>
          </section>
        </div>
        <ComponentOfPret />
        <div className="container">
          <div className="displayFlex">
            <div>
              <h2 className="themeColor">Cost of PRET</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <h2 className="themeColor">How it Works</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <a className="takePretTest">Read More</a>
          </div>
          <QuickNavigation />
        </div>
      </Fragment>
    );
  }
}

export default withLayout2(EmployerPage);
