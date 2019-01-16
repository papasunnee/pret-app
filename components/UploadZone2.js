import React, { Component } from "react";
import DropzoneComponent from "react-dropzone-component";
import Dropzone from "react-dropzone";
import classNames from "classnames";

const imageMaxSize = 1000000000; // bytes
const acceptedFIleTypes = "DOC,PDF,DOCX";
const acceptedFIleTypesArray = acceptedFIleTypes.split(",").map(item => {
  return item.trim();
});
const componentConfig = {
  iconFiletypes: [".jpg", ".png", ".gif"],
  showFiletypeIcon: true,
  postUrl: "/uploadHandler"
};

//const myDropzone

//const componentConfig = { postUrl: 'no-url' };
const djsConfig = { autoProcessQueue: false };
const eventHandlers = { addedfile: file => console.log(file) };

export default class UploadZone extends Component {
  constructor(props) {
    super(props);
  }

  initCallback = dropzone => {
    myDropzone = dropzone;
  };

  removeFile = () => {
    if (myDropzone) {
      myDropzone.removeFile();
    }
  };
  //   onDrop = files => {
  //     // console.log(files);
  //     this.setState({
  //       files,
  //       modalOpen: true
  //     });
  //   };

  onDrop = (acceptedFiles, rejectedFiles) => {
    // Do something with files
  };

  render() {
    return (
      //   <div>
      //     <DropzoneComponent
      //       config={componentConfig}
      //       eventHandlers={eventHandlers}
      //       djsConfig={djsConfig}
      //     />
      //   </div>

      <Dropzone onDrop={this.onDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div
              {...getRootProps()}
              className={classNames("dropzone", {
                "dropzone--isActive": isDragActive
              })}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop files here...</p>
              ) : (
                <p>
                  Try dropping some files here, or click to select files to
                  upload.
                </p>
              )}
            </div>
          );
        }}
      </Dropzone>
    );
  }
}
