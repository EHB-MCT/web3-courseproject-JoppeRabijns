import React from 'react';

import './styles/UploadZone.css'
import uploadLogo from '../../assets/upload.svg'

export default function Uploadzone() {

  return(
    <div className="uploadzoneContainer">
      <img src={uploadLogo} alt="upload icon" />
      <p className="uploadzone.">
        Upload your files here
      </p>
    </div>
  )
}