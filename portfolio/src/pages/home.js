import React, { useState, useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import "./styles/home.css";

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
        <ProjectTitle
          number="01"
          title="kanl"
          category="Videografie"
          url="https://res.cloudinary.com/drxe6ukjd/video/upload/v1638886745/portfolio/kanl_vgr2ju.mp4"
          changeVideo={changeVideo}
        />
        <ProjectTitle
          number="02"
          title="Covida"
          category="Videografie"
          url="https://res.cloudinary.com/drxe6ukjd/video/upload/v1638886759/portfolio/covida_tmbjrm.mp4"
          changeVideo={changeVideo}
        />
        <ProjectTitle
          number="03"
          title="Mer Perdue"
          category="Videografie"
          url=" https://res.cloudinary.com/drxe6ukjd/video/upload/v1638890227/portfolio/ciedevleesklak_thkspu.mp4"
          changeVideo={changeVideo}
        />
        <ProjectTitle
          number="04"
          title="EMJ 2021"
          category="Videografie"
          url="https://res.cloudinary.com/drxe6ukjd/video/upload/v1638890252/portfolio/emj2021_oqtdeb.mp4"
          changeVideo={changeVideo}
        />
        <ProjectTitle
          number="05"
          title="pitch:fx"
          category="Code"
          url="https://res.cloudinary.com/drxe6ukjd/video/upload/v1638889879/portfolio/pitchFX_qkhia3.mov"
          changeVideo={changeVideo}
        />
      </ScrollContainer>
      <VideoBackground url={video} />
    </div>
  );
};

export default Home;
