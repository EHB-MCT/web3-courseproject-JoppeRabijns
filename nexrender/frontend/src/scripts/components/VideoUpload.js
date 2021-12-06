import React from "react";
import CustomButton from "../molecules/Button";
import "./styles/VideoUpload.css";
import "../shared/shared.css";

export default function VideoUpload({ previous, next }) {
  return (
    <>
      <div className="componentContainer">
        <h1 className="createTitle">Add your video tracks</h1>
        <form
          className="uploadForm"
          id="uploadForm"
          encType="multipart/form-data"
          action="http://localhost:5000/uploadVideo"
          method="post"
        >
          <label className="fileLabel" htmlFor="videoFiles">
            Click here to upload your files
          </label>
          <input
            className="fileInput"
            type="file"
            name="videoFiles"
            id="videoFiles"
            multiple
            accept="video/*"
          />
          <input
            hidden
            type="text"
            name="title"
            value={sessionStorage.getItem("projectName")}
            readOnly
          />
          <CustomButton type="submit" value="Upload" name="submit" />
        </form>
        <div className="buttonContainer">
          <CustomButton onClick={previous} value="go back" />
          <CustomButton onClick={next} value="next" />
        </div>
      </div>
    </>
  );
}
