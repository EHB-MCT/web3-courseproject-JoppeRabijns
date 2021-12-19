import React from "react";
import TextArea from "../molecules/TextArea";
import CustomButton from "../molecules/Button";
import "../shared/shared.css";

import "./styles/AudioUpload.css";

export default function AudioUpload({ previous, next }) {
  function translate(input) {
    console.log(input.target.value);
    fetch(
      "https://voicerss-text-to-speech.p.rapidapi.com/?key=cb002a6d35msh02c518c57bda829p16c001jsn33ec5f0c38c2",
      {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "x-rapidapi-host": "voicerss-text-to-speech.p.rapidapi.com",
          "x-rapidapi-key":
            "cb002a6d35msh02c518c57bda829p16c001jsn33ec5f0c38c2",
        },
        body: {
          src: input.target.value,
          hl: "en-us",
          r: "1",
          c: "mp3",
          f: "8khz_8bit_mono",
        },
      }
    ).then((res, err) => {
      if (err) console.log(err);
      else console.log(res.url);
    });
  }

  return (
    <div className="componentContainer">
      <h1 className="createTitle">Add your audio tracks</h1>
      <TextArea done={translate} />
      <div className="buttonContainer">
        <CustomButton onClick={previous} value="go back" />
        <CustomButton onClick={next} value="next" />
      </div>
    </div>
  );
}
