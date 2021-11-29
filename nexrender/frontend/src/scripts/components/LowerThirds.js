import React, { useEffect } from "react";
import TextInput from "../molecules/TextInput";
import VideoPlayer from "../molecules/VideoPLayer";

import "./styles/LowerThirds.css";

export default function LowerThirds() {
  const [number, setNumber] = useState();

  function renderLT() {
    try {
      fetch(`http://localhost:5000/lowerthirds/${number}`, {
        method: "POST",
        body: {
          name: "Joppe",
          title: "student",
        },
      })
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  }
  function getGifs() {
    fetch("http://localhost:5000/lowerThirds");
  }

  useEffect(() => {
    getGifs();
  });

  return (
    <div>
      <div className="lowerContainer">
        <TextInput value="Your name" /> <br />
        <br />
        <TextInput value="Function or organisation" />
      </div>
      <div className="lowerthirds">
        <div
          className="lowerthirdsDiv"
          style={number === 1 ? { border: "10px solid blue" } : {}}
        >
          <img
            src="https://res.cloudinary.com/pitch-fx/image/upload/v1637577270/GIF/LT1_1_ztqysq.gif"
            alt=""
            onClick={() => setNumber(1)}
          />
        </div>
        <div
          className="lowerthirdsDiv"
          style={number === 2 ? { border: "10px solid blue" } : {}}
        >
          <img
            src="https://res.cloudinary.com/pitch-fx/image/upload/v1637577270/GIF/LT2_2_jyhpm1.gif"
            alt=""
            onClick={() => setNumber(2)}
          />
        </div>
        <div
          className="lowerthirdsDiv"
          style={number === 3 ? { border: "10px solid blue" } : {}}
        >
          <img
            src="https://res.cloudinary.com/pitch-fx/image/upload/v1637577270/GIF/LT3_awcluh.gif"
            alt=""
            onClick={() => setNumber(3)}
          />
        </div>
      </div>
    </div>
  );
}
