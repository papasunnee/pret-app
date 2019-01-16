import React, { Component } from "react";
import { Mutation } from "react-apollo";
import axios from "axios";
import { CANDIDATE_UPLOAD_CV_MUTATION } from "../../lib/graphql/mutations/candidate";
import withCandidatePortal from "../../hoc/candidate/withCandidatePortal";
import UploadZone from "../../components/UploadZone";
import Button from "react-bootstrap-button-loader";

class UploadCvPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileSrc: null,
      loading: false
    };
  }

  getFile = fileSrc => {
    this.setState({ fileSrc });
    if (this.state.fileSrc !== null) this.setState({ disabled: false });
  };

  onUploadCompleted = data => {
    console.log('uploaded');
  };

  onUploadError = error => {
    console.log(error);
  };

  //   doUpload = (event, runMutation) => {
  //     event.preventDefault();
  //     event.stopPropagation();

  //     runMutation({
  //       variables: {
  //         record: this.state.fileSrc
  //       }
  //     });
  //   };

  doUpload = async (e, runMutation) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ loading: true });
    // make asynchronous call
    setTimeout(() => {
      this.setState({ buttonState: "success" });
    }, 3000);

    const formData = new FormData();
    // console.log("this.state.fileSrc", this.state.fileSrc);
    formData.append("file", this.state.fileSrc);
    formData.append(
      "upload_preset",
      process.env.CLOUDINARY_CANDIDATE_CVS_UPLOAD_PRESET
    );

    try {
      // this.setState({ isBusy: true });
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          process.env.CLOUDINARY_CLOUD_NAME
        }/image/upload`,
        formData
      );

      const {
        format,
        height,
        public_id,
        resource_type,
        secure_url,
        signature,
        url,
        version,
        width
      } = response.data;

        runMutation({
          variables: {
            record: {
              cvFile: {
                format,
                height,
                public_id,
                resource_type,
                secure_url,
                signature,
                url,
                version,
                width
              }
            }
          }
        });
    } catch (e) {
      // this.setState({ isBusy: false });
      console.log(e);
    }
    this.setState({ loading: false, fileSrc: null });
  };
  render() {
    return (
      <div>
        <h2>Upload CV</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <UploadZone sendFile={this.getFile} />
        <Mutation
          mutation={CANDIDATE_UPLOAD_CV_MUTATION}
          onCompleted={this.onUploadCompleted}
          onError={this.onUploadError}
        >
          {(uploadCV, { data, error }) => (
            <div style={{ textAlign: "center" }}>
              <Button
                bsStyle="success"
                disabled={this.state.fileSrc == null ? true : false}
                loading={this.state.loading}
                onClick={e => this.doUpload(e, uploadCV)}
                state={this.state.buttonState}
              >
                Upload CV
              </Button>
            </div>
          )}
        </Mutation>
      </div>
    );
  }
}
export default withCandidatePortal(UploadCvPage, { activePage: "/upload-cv" });
