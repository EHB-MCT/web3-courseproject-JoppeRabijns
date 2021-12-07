import React from "react";
import "./videoBackground.css";

import video from "../../videos/kanl.mp4";

const VideoBackground = () => {
  return (
    <video autoPlay muted loop className="video">
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
