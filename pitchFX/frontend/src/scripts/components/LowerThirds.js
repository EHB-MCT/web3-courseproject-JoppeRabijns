import React, { useState } from "react";
import TextInput from "../molecules/TextInput";
import CustomButton from "../molecules/Button";
import "../shared/shared.css";

import "./styles/LowerThirds.css";

export default function LowerThirds({ previous, next }) {
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState(false);

  function renderLT(ltNumber) {
    setLoading(true);
    if (name === undefined || title === undefined) {
      console.log("fields are empty");
      setLoading(false);
    } else {
      try {
        fetch(`http://localhost:5000/lowerthirds/${ltNumber}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            title: title,
            projectName: sessionStorage.getItem("projectName"),
          }),
        }).then((data) => {
          console.log(data);
          setLoading(false);
          next();
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  function makeName(item) {
    console.log(name);
    console.log(title);
    setName(item.target.value);
  }

  function makeTitle(item) {
    console.log(name);
    console.log(title);
    setTitle(item.target.value);
  }

  return (
    <div className="componentContainer">
      <h1 className="createTitle">Choose your lower third</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="lowerContainer">
            <TextInput value="Your name" done={makeName} /> <br />
            <br />
            <TextInput value="Function or organisation" done={makeTitle} />
          </div>
          <div className="lowerthirds">
            <div className="lowerthirdsDiv">
              <img
                src="https://res.cloudinary.com/pitch-fx/image/upload/v1637577270/GIF/LT1_1_ztqysq.gif"
                alt=""
                onClick={() => renderLT(1)}
              />
            </div>
            <div className="lowerthirdsDiv">
              <img
                src="https://res.cloudinary.com/pitch-fx/image/upload/v1637577270/GIF/LT2_2_jyhpm1.gif"
                alt=""
                onClick={() => renderLT(2)}
              />
            </div>
            <div className="lowerthirdsDiv">
              <img
                src="https://res.cloudinary.com/pitch-fx/image/upload/v1637577270/GIF/LT3_awcluh.gif"
                alt=""
                onClick={() => renderLT(3)}
              />
            </div>
          </div>
          <div className="buttonContainer">
            <CustomButton onClick={previous} value="go back" />
            <CustomButton onClick={next} value="next" />
          </div>
        </div>
      )}
    </div>
  );
}
