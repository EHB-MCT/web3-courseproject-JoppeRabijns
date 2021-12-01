import React from "react";
import TextInput from "../molecules/TextInput";

import "./styles/ProjectSettings.css";

const axios = require("axios").default;

export default function ProjectSettings({ projectName, currentName }) {
  async function createFolder(input) {
    const name = input.target.value;
    projectName(name);
    sessionStorage.setItem("projectName", name);
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
  return <TextInput done={createFolder} value={currentName} />;
}
