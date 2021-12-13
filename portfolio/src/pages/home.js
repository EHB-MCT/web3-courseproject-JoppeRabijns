import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";

import "./styles/home.css";
import projects from "../projects.json";

import VideoBackground from "../components/VideoBackground/VideoBackground";
import ProjectTitle from "../components/ProjecTitle/ProjectTitle";
import ProjectNumber from "../components/ProjectNumber/ProjectNumber";
import Socials from "../components/Socials/Socials";

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
    slidesToShow: Math.round(window.innerWidth / 550),
    variableWidth: true,
  };
  const slider = useRef(null);

  function scroll(e) {
    if (slider === null) return 0;
    e.wheelDelta > 0 ? slider.current.slickPrev() : slider.current.slickNext();
  }

  useEffect(() => {
    window.addEventListener("wheel", scroll, true);

    return () => {
      window.removeEventListener("wheel", scroll, true);
    };
  }, []);

  return (
    <div className="home">
      <Slider {...settings} ref={slider} className="slider">
        {projects.map((project) => (
          <ProjectTitle
            style={{ width: "650px" }}
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
      <VideoBackground url={video} number={currentNumber} />
      <ProjectNumber numberLenght={projects.length} number={currentNumber} />
      <Socials />
    </div>
  );
};

export default Home;
