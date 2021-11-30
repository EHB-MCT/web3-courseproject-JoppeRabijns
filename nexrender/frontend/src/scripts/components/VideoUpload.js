import React from "react";
import Uploadzone from "../molecules/UploadZone";
import { useState } from "react";
import "./styles/VideoUpload.css";

const axios = require("axios").default;

export default function VideoUpload() {
  const [isLoading, setIsLoading] = useState(false);

  function postData(files) {
    console.log(files);
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
  }

  function loading(bool) {
    setIsLoading(bool);
  }

  return (
    <div className="videoContainer">
      {!isLoading ? (
        <Uploadzone loading={loading} files={postData} />
      ) : (
        <p>Please wait...</p>
      )}
    </div>
  );
}
