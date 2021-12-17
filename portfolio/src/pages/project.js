import React, { useRef, useEffect } from "react";
import VideoBackground from "../components/VideoBackground/VideoBackground";
import { Link, useParams } from "react-router-dom";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles/project.css";
import projects from "../projects.json";
import Socials from "../components/Socials/Socials";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const Ref = useRef(null);
  useEffect(() => {
    gsap.from("#main", {
      opacity: 0,
      x: 150,
      scrollTrigger: {
        trigger: "#main",
        start: "top bottom",
        end: "+=100px",
      },
    });
  }, []);

  const { number } = useParams();
  let project = projects.filter((project) => project.number === number)[0];
  return (
    <>
      <div className="projectDiv">
        <div className="titleDiv">
          <h1 className="title">{project.title}</h1>
          <h2 className="subtitle">{project.subtitle}</h2>
        </div>
        <Link to="/" className="back">
          <div className="prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z" />
            </svg>
            <h6 className="back">back</h6>
          </div>
        </Link>
        <div className="icon-scroll"></div>
        <VideoBackground url={project.url} imageUrl={project.imageUrl} />
        <Socials />
      </div>
      <ProjectDetails ref={Ref} id="main" project={project} />
    </>
  );
};

export default Project;
