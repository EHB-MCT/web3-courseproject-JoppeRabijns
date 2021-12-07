import React, { useState } from "react";
import "./ProjectTitle.css";

const ProjectTitle = (props) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="project"
      onMouseOver={() => {
        setActive(true);
        props.changeVideo(props.url);
      }}
      onMouseOut={() => {
        setActive(false);
      }}
    >
      <div>
        <h6 className="projectNumber">{props.number}</h6>
        <h1
          className={active ? "projectTitle active" : "projectTitle inactive"}
        >
          {props.title}
        </h1>
      </div>
      <h3 className="projectCategory">{props.category}</h3>
    </div>
  );
};

export default ProjectTitle;
