import React, { Component } from "react";
import SvgLoader from "bv-react-svgloader";

export default class ComponentOfPret extends Component {
  render() {
    return (
      <section className="componentOfPret">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2>Components of PRET</h2>
            </div>

            <div className="col-md-4">
              <SvgLoader
                src="/static/images/aboutIcon1.svg"
                className="svg-logo"
              />
              <span>Aptitude Test</span>
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
            </div>
            <div className="col-md-4">
              <SvgLoader
                src="/static/images/aboutIcon2.svg"
                className="svg-logo"
              />
              <span>Personality Test</span>
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
            </div>
            <div className="col-md-4">
              <SvgLoader
                src="/static/images/aboutIcon3.svg"
                className="svg-logo"
              />
              <span>Skill Test</span>
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
            </div>
          </div>
        </div>
      </section>
    );
  }
}
