import React, { useState } from "react";
import CustomButton from "../molecules/Button";
import { useNavigate } from "react-router-dom";
import "./styles/Editor.css";

const axios = require("axios").default;

export default function Editor({ previous }) {
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();
  let projectName = sessionStorage.getItem("projectName");

  function render() {
    setLoading(true);
    try {
      axios({
        method: "get",
        url: `http://localhost:5000/videos/${projectName}`,
      }).then((response) => {
        console.log(response.data);
        renderVideo(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  function renderVideo(data) {
    setLoading(true);
    try {
      axios({
        method: "post",
        url: "http://localhost:5000/render",
        data: {
          videoNames: [
            {
              url: "https://res.cloudinary.com/drxe6ukjd/video/upload/v1638042173/teasertijl_nprvcg.mp4",
              inTime: "00:02.000",
            },
            {
              url: "https://res.cloudinary.com/drxe6ukjd/video/upload/v1638042168/EKSEL_le6ass.mp4",
              inTime: "00:00.500",
            },
          ],
          projectName: projectName,
        },
      }).then((response) => {
        sessionStorage.setItem("url", response.data);
        setLoading(false);
        navigator("/download");
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="componentContainer">
      <h1 className="createTitle">Render your video</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <CustomButton onClick={render} value="render" />
          <div className="buttonContainer">
            <CustomButton onClick={previous} value="go back" />
          </div>
        </>
      )}
    </div>
  );
}
