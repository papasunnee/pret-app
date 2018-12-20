import React, { Component } from "react";
import Link from "next/link";
import SvgLoader from "bv-react-svgloader";
import withCandidatePortal from "../../hoc/candidate/withCandidatePortal";
import "./dashboard.scss";

const activities = [
  { label: "Make Payment", link: "payment", linkLabel: "Pay Now" },
  { label: "Receipt", link: "receipt", linkLabel: "View Receipt" },
  { label: "Schedule Test", link: "schedule-test", linkLabel: "Schedule" },
  { label: "Upload CV", link: "upload-cv", linkLabel: "Upload" }
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row dashboardActivity">
          {activities.map((activity, key) => {
            return (
              <div className="col-md-6">
                <div className="activityContent">
                  <img
                    className="img-fluid d-block"
                    src={`/static/images/dashboard/${activity.link}.png`}
                  />
                  <span>{activity.label}</span>
                  <hr />
                  <Link prefetch href={`/user/${activity.link}`}>
                    <a className="buttonLink">{activity.linkLabel}</a>
                  </Link>
                  <div className="clearfix" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default withCandidatePortal(Dashboard, { activePage: "/" });
