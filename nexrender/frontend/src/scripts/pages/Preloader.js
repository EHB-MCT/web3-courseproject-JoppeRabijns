import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Preloader.css'

export default function Preloader() {
  return(
    <div className="preloaderContainer">
      <Link to="/create" class="appTitle">
        PITCH:fx
      </Link>
    </div>
  )
}