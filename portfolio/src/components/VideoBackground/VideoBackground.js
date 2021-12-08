import React, { useState, useEffect } from "react";
import "./videoBackground.css";

const VideoBackground = (props) => {
  const [animate, setAnimate] = useState(false);

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
