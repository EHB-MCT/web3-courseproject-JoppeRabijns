import React, { useState, useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import Slider from "react-slick";

import "./styles/home.css";
import projects from "../projects.json";

import VideoBackground from "../components/VideoBackground/VideoBackground";
import ProjectTitle from "../components/ProjecTitle/ProjectTitle";
import ProjectNumber from "../components/ProjectNumber/ProjectNumber";

const Home = () => {
  const [video, setVideo] = useState(projects[0].url);
  const [currentNumber, setCurrentNumber] = useState("01");

  const [width, setWidth] = useState("650px");

  function changeVideo(url) {
    setVideo(url);
  }

  function changeNumber(number) {
    setCurrentNumber(number);
  }

  const settings = {
    infinite: true,
    speed: 500,
    lazyLoad: true,
    accessibility: true,
    slidesToShow: Math.round(window.innerWidth / 550),
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div className="home">
      <Slider {...settings} className="slider">
        {projects.map((project) => (
          <ProjectTitle
            style={{ width: width }}
            key={project.number}
            number={project.number}
            title={project.title}
            new={project.new}
            category={project.category}
            url={project.url}
            changeNumber={changeNumber}
            changeVideo={changeVideo}
          />
        ))}
      </Slider>
      <VideoBackground url={video} />
      <ProjectNumber numberLenght={projects.length} number={currentNumber} />
    </div>
  );
};

export default Home;
