import React from "react";
import Uploadzone from "../molecules/UploadZone";
import { useState } from "react";

import "./styles/VideoUpload.css";

export default function VideoUpload() {
  const [isLoading, setIsLoading] = useState(false);

  function postData(files) {
    console.log({ files });
    try {
      fetch("http://localhost:5000/upload", {
        method: "POST",
        headers: {
          //"Content-Type": "application/json",
          //"Content-Type": "multipart/form-data",
        },
        body: files,
      })
        .then((data) => data.json())
        .then((data) => {
          loading(false);
          console.log(data);
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
