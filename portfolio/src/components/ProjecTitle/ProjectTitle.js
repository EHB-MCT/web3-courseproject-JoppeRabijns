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
        <div className="smalls">
          <h6 className="projectNumber">{props.number}</h6>
          {props.new === "true" ? <h6 className="projectNew">Nieuw</h6> : <></>}
        </div>
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
