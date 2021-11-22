import React from 'react';
import TextArea from '../molecules/TextArea';

import'./styles/AudioUpload.css'

export default function AudioUpload(){

  function translate(input) {
    console.log(input.target.value);
    fetch("https://voicerss-text-to-speech.p.rapidapi.com/?key=01d24eec24mshd85d208ee9bc6cap120b4cjsn9098a5ecb31f", {
	    "method": "POST",
	    "headers": {
	    	"content-type": "application/x-www-form-urlencoded",
	    	"x-rapidapi-host": "voicerss-text-to-speech.p.rapidapi.com",
	    	"x-rapidapi-key": "01d24eec24mshd85d208ee9bc6cap120b4cjsn9098a5ecb31f"
	    },
	    "body": {
	    	"src": "hallo",
	    	"hl": "en-us",
	    	"r": "1",
	    	"c": "mp3",
	    	"f": "8khz_8bit_mono"
	    }
    })
    .then((res, err) => {
      if (err)
        console.log(err);
      else
        console.log(res.url);
    })
  }

  return(
    <div className="audioContainer">
      <TextArea done={translate} />
    </div>
  )
}