import React, { Component } from "react";
import Dropzone from "react-dropzone";
import classNames from "classnames";

const imageMaxSize = 1000000000; // bytes
const acceptedFileTypes =
  "application/doc,application/pdf,application/docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document";
const acceptedFileTypesArray = acceptedFileTypes.split(",").map(item => {
  return item.trim();
});

export default class UploadZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileSrc: {}
    };
  }

  verifyFile = files => {
    if (files && files.length > 0) {
      const currentFile = files[0];
      console.log(currentFile);
      const currentFileType = currentFile.type;
      const currentFileSize = currentFile.size;
      if (currentFileSize > imageMaxSize) {
        alert("too large");
        return false;
      }
      if (!acceptedFileTypesArray.includes(currentFileType)) {
        alert("file type not allowed");
        return false;
      }
      return true;
    }
  };
  initCallback = dropzone => {
    myDropzone = dropzone;
  };

  onDrop = async (acceptedFiles, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      this.verifyFile(rejectedFiles);
    }
    if (acceptedFiles && acceptedFiles.length > 0) {
      const isVerified = this.verifyFile(acceptedFiles);
      if (isVerified) {
        await this.setState({ fileSrc: acceptedFiles[0] });
        this.props.sendFile(this.state.fileSrc);
      }
    }
  };

  render() {
    return (
      <Dropzone onDrop={this.onDrop} multiple={false}>
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div
              style={{ border: "4px dashed #e5e5e5", marginBottom: "10px" }}
              {...getRootProps()}
              className={classNames("dropzone", {
                "dropzone--isActive": isDragActive
              })}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <div className="text-center">
                  <p className="display-3">
                    <i className="fa fa-cloud-upload" aria-hidden="true" />
                  </p>
                  <p className="display-4" style={{ fontSize: "2rem" }}>
                    Drop file here
                  </p>
                </div>
              ) : (
                // <p>
                //   Try dropping some files here, or click to select files to
                //   upload.
                // </p>
                <div className="text-center">
                  <p className="display-3">
                    <i className="fa fa-upload" aria-hidden="true" />
                  </p>
                  <p className="display-4" style={{ fontSize: "2rem" }}>
                    Drop a file here or click to upload
                  </p>
                </div>
              )}
            </div>
          );
        }}
      </Dropzone>
    );
  }
}
