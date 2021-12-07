import React from "react";
import "./styles/home.css";

import VideoBackground from "../components/VideoBackground/VideoBackground";

const Home = () => {
  return (
    <div className="home">
      <div className="project">
        <h6 className="projectNumber">01</h6>
        <h1 className="projectTitle magic-hover">kanl</h1>
      </div>
      <VideoBackground />
    </div>
  );
};

export default Home;
