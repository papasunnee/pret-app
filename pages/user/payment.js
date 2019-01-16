import React, { Component, Fragment } from "react";
// import Link from 'next/link'
import withCandidatePortal from "../../hoc/candidate/withCandidatePortal";

import PaymentButton from "../../components/CandidatePortal/PaymentButton";

import Checkbox from "material-ui/Checkbox";
import { CardTitle, CardText } from "material-ui/Card";
import SvgLoader from "bv-react-svgloader";
import { CandidateDetailsContext } from "../../contexts/CandidateDetailsContext";
import TextField from "material-ui/TextField";

const styles = {
  customWidth: {
    width: 150
  }
};

class PaymentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 10,
      //email: 'bellooladipupo41@gmail.com',
      //amount: 100*100, // equals 100NGN
      coupon: "",
      checked: false
    };
  }

  updateCheck() {
    this.setState(oldState => {
      return {
        checked: !oldState.checked
      };
    });
  }

  handleChange = (event, index, value) => {
    this.setState({ value });
  };
  render() {
    return (
      <div>
        <CandidateDetailsContext.Consumer>
          {({ candidate, pretPrice }) => {
            const payPrice = pretPrice.pretPrice * 100; //convert to kobo for payStack
            const displayPrice = `${pretPrice.symbol}${pretPrice.pretPrice}${
              pretPrice.symbol ? "" : pretPrice.currency
            }`;
            const cancelPrice = `${pretPrice.symbol}${pretPrice.pretPrice * 2}${
              pretPrice.symbol ? "" : pretPrice.currency
            }`;
            return (
              <Fragment>
                <div style={{ padding: "20px" }}>
                  <h2>Payment Page</h2>
                  <hr />
                  <p>The unit price for PRET test is {displayPrice}.</p>
                  <p>
                    We currently do NOT have facilities to handle cash payments.
                    Please read our “Terms of Use” of PRET before you proceed.
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <SvgLoader
                      src="/static/images/pret-logo-small.svg"
                      className="svg-logo"
                    />
                  </div>
                  <CardTitle
                    title="Purchase Pre-employment Test Code"
                    subtitle="A service of Career Intelligence"
                  />
                  <CardText>
                    <div style={{ textAlign: "center" }}>
                      <p>Unit Price for PRET Code</p>
                      <p
                        style={{
                          margin: "0",
                          border: "1px solid #B24771",
                          letterSpacing: "2px",
                          fontWeight: "bold",
                          fontSize: "3em",
                          color: "#308F13"
                        }}
                      >
                        {displayPrice}
                      </p>
                      <br />
                      <p
                        style={{
                          padding: "0",
                          margin: "0",
                          letterSpacing: "2px",
                          color: "#B24771",
                          textDecoration: "line-through",
                          fontSize: "1.8em"
                        }}
                      >
                        {cancelPrice}
                      </p>
                    </div>

                    <TextField
                      hintText="Coupon Code (if available)"
                      onChange={e => this.setState({ coupon: e.target.value })}
                    />
                    <Checkbox
                      label={
                        <span>
                          I agree to the{" "}
                          <a href="/faqs">terms and conditions</a> of PRET
                          service
                        </span>
                      }
                      checked={this.state.checked}
                      onCheck={this.updateCheck.bind(this)}
                      style={styles.checkbox}
                    />
                    <PaymentButton
                      coupon={this.state.coupon}
                      email={candidate.email}
                      amount={payPrice}
                      priceId={pretPrice._id}
                      disabled={!this.state.checked}
                    />
                  </CardText>
                </div>
              </Fragment>
            );
          }}
        </CandidateDetailsContext.Consumer>
      </div>
    );
  }
}
export default withCandidatePortal(PaymentPage, { activePage: "/payment" });
