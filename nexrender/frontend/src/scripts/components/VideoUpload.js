import React from "react";
import Dropzone from "react-dropzone-uploader";
import "./styles/VideoUpload.css";
import "react-dropzone-uploader/dist/styles.css";

const axios = require("axios").default;

export default function VideoUpload() {
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
