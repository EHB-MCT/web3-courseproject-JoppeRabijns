import React from "react";
import Dropzone from "react-dropzone-uploader";
import "./styles/VideoUpload.css";
import "react-dropzone-uploader/dist/styles.css";

const axios = require("axios").default;

export default function VideoUpload() {
  //const getUploadParams = ({ file, meta }) => {
  //  const body = new FormData();
  //  body.append("filefield", file);
  //  return { url: "http://localhost:5000/uploadVideo", body };
  //};
  //
  //// called every time a file's `status` changes
  //const handleChangeStatus = ({ meta, file }, status) => {
  //  //console.log(status, meta, file);
  //};
  //
  //// receives array of files that are done uploading when submit button is clicked
  //const handleSubmit = (files, allFiles) => {
  //  console.log(files.map((f) => f.meta));
  //  try {
  //    axios({
  //      method: "post",
  //      url: "http://localhost:5000/uploadVideo",
  //      data: {
  //        files: files,
  //      },
  //    });
  //  } catch (err) {
  //    console.log(err);
  //  }
  //
  //  allFiles.forEach((f) => f.remove());
  //};
  //
  //return (
  //  <Dropzone
  //    getUploadParams={getUploadParams}
  //    onChangeStatus={handleChangeStatus}
  //    onSubmit={handleSubmit}
  //    accept="video/*"
  //  />
  //);

  return (
    <div className="upload">
      <form
        id="uploadForm"
        encType="multipart/form-data"
        action="http://localhost:5000/uploadVideo"
        method="post"
      >
        <label htmlFor="model"> 3d model </label>
        <input
          type="file"
          name="videofiles"
          id="fileUpload"
          multiple
          accept="video/*"
        />
        <br />
        <input
          hidden
          type="text"
          name="title"
          value={sessionStorage.getItem("projectName")}
        />
        <br />
        <input type="submit" value="Upload asset" name="submit" />
      </form>
    </div>
  );
}
