import React, { Component } from 'react';
import AudioUpload from '../components/AudioUpload';
import LowerThirds from '../components/LowerThirds';
import Editor from '../components/Editor';
import VideoUpload from '../components/VideoUpload';
import { Link } from 'react-router-dom';

import './styles/CreateVideo.css'
import CustomButton from '../molecules/Button';

export default class CreateVideo extends Component{
  constructor(props) {
    super(props);
    this.state = {
      videoPaths: [],
      text: "",
      audioPaths: [],
      originalAudio: false,
      step: 1,
      stepToLoad: <VideoUpload />
    }
  }

  next() {
    const newStep = this.state.step + 1;
    this.setState({
      step: newStep
    })
    this.checkStep(newStep);
  }

  previous() {
    const newStep = this.state.step - 1;
    this.setState({
      step: newStep
    })
    this.checkStep(newStep);
  }

  checkStep(step){
    let newComp;

    if (step === 2)
      newComp = <AudioUpload />;
    else if (step === 3)
      newComp = <LowerThirds />;
    else if (step === 4)
      newComp = <Editor />

    this.setState({
      stepToLoad: newComp
    })
  }

  render(){
    return(
      <div>
      {this.state.stepToLoad}
      {this.state.step <=3 ?
        <CustomButton onClick={this.next.bind(this)} value='NEXT'/>
        :
        <Link to='/download'>
          <CustomButton value='RENDER'/>
        </Link>
      }
      </div>
    )
  }
}