import React from "react";
import CustomButton from "../molecules/Button";
import "./styles/VideoUpload.css";
import "../shared/shared.css";

export default function VideoUpload({ previous, next }) {
  return (
    <div className="componentContainer">
      <h1 className="createTitle">Add your video tracks</h1>
      <form
        id="uploadForm"
        encType="multipart/form-data"
        action="http://localhost:5000/uploadVideo"
        method="post"
      >
        <label htmlFor="videoFiles"> Upload your video's here </label>
        <br />
        <input
          type="file"
          name="videoFiles"
          id="videoFiles"
          multiple
          accept="video/*"
        />
        <br />
        <input
          hidden
          type="text"
          name="title"
          value={sessionStorage.getItem("projectName")}
          readOnly
        />
        <br />
        <input type="submit" value="Upload asset" name="submit" />
      </form>
      <div className="buttonContainer">
        <CustomButton onClick={previous} value="go back" />
        <CustomButton onClick={next} value="next" />
      </div>
    </div>
  );
}
