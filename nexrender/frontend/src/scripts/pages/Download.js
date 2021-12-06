import React from "react";
import CustomButton from "../molecules/Button";
import "./styles/Download.css";
import "../shared/shared.css";

export default function Download() {
  let video = sessionStorage.getItem("url");

  return (
    <div className="componentContainer">
      <video width="750" height="500" controls>
        <source src={video} type="video/mp4" />
      </video>
      <br />
      <a href={video} download>
        <CustomButton value="Download" />
      </a>
    </div>
  );
}
