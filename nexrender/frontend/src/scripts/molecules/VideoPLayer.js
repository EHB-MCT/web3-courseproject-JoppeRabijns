import React from 'react';

import './styles/VideoPlayer.css';

export default function VideoPlayer({video = false, src}){

  return(
    <div className="videoPlayerContainer">
      {video ? 
      <iframe src={src} frameborder="0"/>
      :
      <img src={src} alt="" />
      }
    </div>
  )
}