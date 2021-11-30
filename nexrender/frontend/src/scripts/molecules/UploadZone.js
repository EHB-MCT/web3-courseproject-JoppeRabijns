import React, { useCallback } from "react";
import Dropzone from "react-dropzone-uploader";
import "./styles/UploadZone.css";
import "react-dropzone-uploader/dist/styles.css";
import uploadLogo from "../../assets/upload.svg";

//http://jsfiddle.net/4cwpLvae/

export default function Uploadzone(props) {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: "http://localhost:5000/uploadVideo" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="video/*"
    />
  );
}
