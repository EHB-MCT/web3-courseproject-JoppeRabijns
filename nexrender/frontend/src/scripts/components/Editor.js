import React from "react";

import "./styles/Editor.css";
const axios = require("axios").default;

export default function Editor() {
  async function render(input) {
    let projectName = sessionStorage.getItem("projectName");
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
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <button onClick={render}> render </button>
    </>
  );
}
