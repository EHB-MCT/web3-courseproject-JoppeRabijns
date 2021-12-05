import React, { useState } from "react";
import CustomButton from "../molecules/Button";
import "./styles/Editor.css";
const axios = require("axios").default;

export default function Editor() {
  const [loading, setLoading] = useState(false);
  let projectName = sessionStorage.getItem("projectName");

  function render() {
    setLoading(true);
    try {
      axios({
        method: "get",
        url: `http://localhost:5000/videos/${projectName}`,
      }).then((response) => {
        renderVideo(response.data);
        console.log(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  function renderVideo(data) {
    try {
      axios({
        method: "post",
        url: "http://localhost:5000/render",
        data: {
          videoNames: data.videoNames,
          projectName: data.projectName,
        },
      }).then((response) => {
        sessionStorage.setItem("url", response.data);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <CustomButton onClick={render} value="render" />
      )}
    </>
  );
}
