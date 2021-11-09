import React, { Component } from 'react';

import './styles/CreateVideo.css'

export default class CreateVideo extends Component{
  constructor(props) {
    super(props);
    this.state = {
      videoPaths: [],
      text: "",
      audioPaths: [],
      originalAudio: false,
      step: 1
    }
  }

  next() {
    this.state.step++;
  }

  render(){
    const stepToLoad = () => {
      switch (this.state.step) {
        case 2:
          return <AudioUpload />
        case 3: 
          return <LowerThirds />
        case 4:
          return <Editor />
        default:
          return <VideoUpload />
      }
    }
    return(
      {stepToLoad}
    )
  }
}