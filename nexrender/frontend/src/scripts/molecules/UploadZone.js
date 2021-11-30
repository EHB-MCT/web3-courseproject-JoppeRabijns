import React, { useCallback } from "react";
import Dropzone from "react-dropzone-uploader";
import "./styles/UploadZone.css";
import "react-dropzone-uploader/dist/styles.css";
import uploadLogo from "../../assets/upload.svg";

const axios = require("axios").default;

//http://jsfiddle.net/4cwpLvae/

export default function Uploadzone(props) {
  // specify upload params and url for your files
  const getUploadParams = ({ file, meta }) => {
    const body = new FormData();
    body.append("filefield", file);
    return { url: "http://localhost:5000/uploadVideo", body };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    //console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    try {
      axios({
        method: "post",
        url: "http://localhost:5000/uploadVideo",
        data: {
          files: files,
        },
      });
    } catch (err) {
      console.log(err);
    }

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
