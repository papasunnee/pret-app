import React, { Component, Fragment } from "react";
import Head from "next/head";
import withLayout2 from "../components/withLayout2";
import QuickNavigation from "../components/QuickNavigation";
import Header from "../components/Header";

class ContactPage extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>PRET :: Contact</title>
        </Head>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img
                className="img-fluid mb-4"
                src="/static/images/contact.png"
              />
            </div>
            <div className="col-md-12">
              <h2 className="themeColor" style={{ textAlign: "center" }}>
                WE ARE AVAILABLE 24/7, 365 DAYS
              </h2>
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6">
              <h3 className="themeColor mb-4">Our Address</h3>
              <p>Address 1</p>
              <p>Frances Street, London,United Kingdom</p>
              <p>Phone +1234 567 567</p>
              <p>Address 2</p>
              <p>Frances St, Woolwich, London SE18,</p>
              <p>UK Email</p>
            </div>
            <div className="col-md-6">
              <div className="contactForm">
                <h3 className="themeColor mb-4">Contact Form</h3>
                <form className="form">
                  <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" />
                  </div>

                  <button>SEND</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <QuickNavigation />
        </div>
      </Fragment>
    );
  }
}

export default withLayout2(ContactPage);
