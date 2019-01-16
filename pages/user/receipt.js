import React, { Component, Fragment } from "react";
import withCandidatePortal from "../../hoc/candidate/withCandidatePortal";
import { Table } from "react-bootstrap";
import {
  CandidatePaymentsWrapper,
  CandidatePaymentsContext
} from "../../contexts/CandidatePaymentsContext";
import Link from "next/link";
import moment from "moment";

class ReceiptPage extends Component {
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
        <CandidatePaymentsWrapper>
          <CandidatePaymentsContext.Consumer>
            {({ payments }) => (
              <Fragment>
                {payments.length == 0 && (
                  <div style={{ marginTop: "100px", textAlign: "center" }}>
                    <h3>You have not made any payment, Yet</h3>
                    <br />
                    <Link href="/user/payment" prefetch>
                      <a>Please Click here to make payment</a>
                    </Link>
                  </div>
                )}
                {payments.length > 0 && (
                  <Table responsive hover style={{ width: "100%" }}>
                    <thead style={{ backgroundColor: "#b2b2b2" }}>
                      <tr>
                        <th>#</th>
                        <th>Test Code</th>
                        <th>Reference</th>
                        <th>Amount</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payments.map((payment, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            {payment.testCode
                              ? payment.testCode
                              : "Not available"}
                          </td>
                          <td>
                            {payment.paystackReference || "Not available"}
                          </td>
                          <td>
                            {payment.amount
                              ? `${payment.currency} ${payment.amount}`
                              : "Not available"}
                          </td>
                          <td>
                            {payment.createdAt
                              ? `${moment(payment.createdAt).format(
                                  "MMMM Do YYYY"
                                )}`
                              : `not available`}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Fragment>
            )}
          </CandidatePaymentsContext.Consumer>
        </CandidatePaymentsWrapper>
      </div>
    );
  }
}
export default withCandidatePortal(ReceiptPage, { activePage: "/receipt" });
