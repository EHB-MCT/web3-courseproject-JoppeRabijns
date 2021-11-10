import React from 'react';
import Loader from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import './styles/Loader.css'

export default function CustomLoader({duration=2000, target}) {

  const navigate = useNavigate();

  function timeout(){
    navigate(target)
  }

  return(
    <div>
      {setTimeout(timeout, duration)}
      <Loader
        type='Bars'
        color='#FFF'
        height={80}
        width={200}
        timeout={duration}
      />
    </div>
  )
}