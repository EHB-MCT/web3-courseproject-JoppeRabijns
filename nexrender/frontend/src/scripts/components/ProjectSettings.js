import React from "react";
import TextInput from "../molecules/TextInput";

import "./styles/ProjectSettings.css";

export default function ProjectSettings({ projectName, currentName }) {
  async function createFolder(input) {
    const name = input.target.value;
    projectName(name);
    //
    sessionStorage.setItem("projectName", name);
    //
    const req = await fetch("http://localhost:5000/makeFolder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        projectName: "hallo",
      },
    });
    const res = await req.json();
    console.log(res);
  }
  return <TextInput done={createFolder} value={currentName} />;
}
