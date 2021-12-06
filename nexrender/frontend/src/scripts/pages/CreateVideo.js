import React, { useEffect, useState } from "react";
//import AudioUpload from "../components/AudioUpload";
import LowerThirds from "../components/LowerThirds";
import Editor from "../components/Editor";
import VideoUpload from "../components/VideoUpload";
import ProjectSettings from "../components/ProjectSettings";

import "./styles/CreateVideo.css";
import "../shared/shared.css";

export default function CreateVideo() {
  const [step, setStep] = useState(1);
  const [projectName, setProjectName] = useState("");

  const components = [
    <ProjectSettings next={next} previous={previous} />,
    <VideoUpload next={next} previous={previous} />,
    //<AudioUpload next={next} previous={previous} />,
    <LowerThirds next={next} previous={previous} />,
    <Editor previous={previous} />,
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setProjectName(sessionStorage.getItem("projectName"));
  });

  function next() {
    setStep(step + 1);
  }

  function previous() {
    setStep(step - 1);
  }

  return (
    <div className="createContainer">
      {step === 1 ? <></> : <h1 className="projectTitle">{projectName}</h1>}
      <div className="createComponents">{components[step - 1]}</div>
    </div>
  );
}
