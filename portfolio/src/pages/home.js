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
    slidesToShow: Math.round(window.innerWidth / 750),
    slidesToScroll: 1,
  };

  return (
    <div className="home">
      <Slider {...settings}>
        {projects.map((project) => (
          <ProjectTitle
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
    </div>
  );
};

export default Home;
