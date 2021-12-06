import React from "react";
import TextInput from "../molecules/TextInput";
import CustomButton from "../molecules/Button";

import "./styles/ProjectSettings.css";
import "../shared/shared.css";

const axios = require("axios").default;

export default function ProjectSettings({ next, previous }) {
  let name = sessionStorage.getItem("projectName");

  function createFolder(input) {
    if (input.target.value) {
      name = input.target.value;
      sessionStorage.setItem("projectName", name);
    }
    try {
      axios({
        method: "post",
        url: "http://localhost:5000/createProject",
        data: {
          projectName: name,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="componentContainer">
      <h1 className="createTitle">Add a unique project name</h1>
      <TextInput done={createFolder} value={name} />
      <div className="buttonContainer">
        <CustomButton onClick={next} value="next" />
      </div>
    </div>
  );
}
