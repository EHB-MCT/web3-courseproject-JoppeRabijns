import React, { useState, useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import "./styles/home.css";
import projects from "../projects.json";

import VideoBackground from "../components/VideoBackground/VideoBackground";
import ProjectTitle from "../components/ProjecTitle/ProjectTitle";

const Home = () => {
  const [video, setVideo] = useState();

  function changeVideo(url) {
    setVideo(url);
  }

  return (
    <div className="home">
      <ScrollContainer className="scroll-container" vertical={false}>
        {projects.map((project) => (
          <ProjectTitle
            number={project.number}
            title={project.title}
            new={project.new}
            category={project.category}
            url={project.url}
            changeVideo={changeVideo}
          />
        ))}
      </ScrollContainer>
      <VideoBackground url={video} />
    </div>
  );
};

export default Home;
