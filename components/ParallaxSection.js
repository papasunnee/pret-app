import React, { Component } from "react";

export default class ParallaxSection extends Component {
  state = {};
  render() {
    return (
      <section className="wrapper">
        <div className="container">
          <div className="row text-center" style={{ alignItems: "center" }}>
            <div className="col-md-6">
              <img
                src="/static/images/employer2.png"
                style={{ width: "80%", margin: "30px 0px" }}
              />
            </div>
            <div className="col-md-6">
              <div className="captionMessage">
                <p>
                  Job Applications, Resumes and Interviews are Subjective, PRET
                  Adds an Objective Dimension to your Recruitment Process,
                  Minimising the Risk of Hiring an Unfit Candidate
                  <a className="readMore">Read More</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
