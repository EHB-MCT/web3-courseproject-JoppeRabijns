import React from "react";
import "./styles/Download.css";

export default function Download() {
  let video = sessionStorage.getItem("url");
  return (
    <>
      <video width="750" height="500" controls>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
}
