import React, { useState } from "react";
import "./ProjectNumber.css";

const ProjectNumber = (props) => {
  return (
    <div>
      <h6 className="ProjectNumber">
        {props.number} &nbsp;
        <svg height="5" width="30">
          <line x1="0" y1="0" x2="30" y2="0" />
        </svg>{" "}
        &nbsp; 0{props.numberLenght}
      </h6>
    </div>
  );
};

export default ProjectNumber;
