import React, { useEffect } from 'react';
import TextInput from '../molecules/TextInput'
import VideoPlayer from '../molecules/VideoPLayer';

import './styles/LowerThirds.css';

export default function LowerThirds(){
  function getGifs() {
    fetch('http://localhost:5000/lowerThirds')
  }

  useEffect(() => {
    getGifs();
  })

  return(
    <div className="lowerContainer">
      <TextInput value="Your name"/> <br /><br />
      <TextInput value="Function or organisation"/>
      <VideoPlayer/>
    </div>
  )
}