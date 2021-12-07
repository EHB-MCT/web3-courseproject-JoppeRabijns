import React, { useState } from "react";
import "./ProjectNumber.css";

const ProjectNumber = (props) => {
  return (
    <div>
      <h6 className="ProjectNumber">
        {props.number} ---- 0{props.numberLenght}
      </h6>
    </div>
  );
};

export default ProjectNumber;
