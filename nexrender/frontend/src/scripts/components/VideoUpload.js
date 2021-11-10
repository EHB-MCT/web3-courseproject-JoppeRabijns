import React from 'react';
import Uploadzone from '../molecules/UploadZone';

import './styles/VideoUpload.css';

export default function VideoUpload(){
  return(
    <div className="videoContainer">
      <Uploadzone />
    </div>
  )
}