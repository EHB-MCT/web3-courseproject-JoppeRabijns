import React from "react";
import "./videoBackground.css";

const VideoBackground = (props) => {
  return (
    <video
      autoPlay
      muted
      loop
      className="video"
      src={props.url}
      type="video/mp4"
    />
  );
};

export default VideoBackground;
