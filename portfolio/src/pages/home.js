import React, { useState, useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import "./styles/home.css";
import projects from "../projects.json";

import VideoBackground from "../components/VideoBackground/VideoBackground";
import ProjectTitle from "../components/ProjecTitle/ProjectTitle";
import ProjectNumber from "../components/ProjectNumber/ProjectNumber";

const Home = () => {
  const [video, setVideo] = useState();
  const [currentNumber, setCurrentNumber] = useState();

  function changeVideo(url) {
    setVideo(url);
  }

  function changeNumber(number) {
    setCurrentNumber(number);
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
            changeNumber={changeNumber}
            changeVideo={changeVideo}
          />
        ))}
      </ScrollContainer>
      <ProjectNumber number={currentNumber} numberLenght={projects.length} />
      <VideoBackground url={video} />
    </div>
  );
};

export default Home;
