import React, { useEffect } from 'react';
import CustomLoader from '../molecules/Loader';

import './styles/Preloader.css'

export default function Preloader() {

  return(
    <div className="preloaderContainer">
      <h1 class="appTitle">
        PITCH:fx
      </h1>
      <CustomLoader target={'/create'} duration={3000}/>
    </div>
  )
}