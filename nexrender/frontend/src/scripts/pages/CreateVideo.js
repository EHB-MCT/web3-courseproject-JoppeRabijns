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
      originalAudio: true,
      step: 1,
      totalSteps: 0,
      components: [],
      stepNames: []
    }
  }

  componentDidMount() {
    const stepNames = [
      "Add your video tracks",
      "Add your audio tracks",
      "Choose your lower third",
      "Edit your tracks",
    ];

    const components = [
      <VideoUpload />,
      <AudioUpload />,
      <LowerThirds />,
      <Editor />
    ]

    const totalSteps = stepNames.length;

    this.setState({
      stepNames: stepNames,
      totalSteps: totalSteps,
      components: components,
    })
  }

  next() {
    const newStep = this.state.step + 1;
    this.setState({
      step: newStep
    })
  }

  previous() {
    const newStep = this.state.step - 1;
    this.setState({
      step: newStep
    })
  }

  render(){
    return(
      <div className="createContainer">
        <h1 className="createTitle">
          {this.state.stepNames[this.state.step - 1]}
        </h1>
        <div className="createComponents">
          {this.state.components[this.state.step - 1]}
        </div>
        {/* ---------------------
        PREVIOUS AND NEXT BUTTONS
        --------------------- */}
        <div>
          {this.state.step > 1 ?
            <CustomButton onClick={this.previous.bind(this)} value='GO BACK' />
            :
            undefined
          }
          {this.state.step <= this.state.totalSteps - 1 ?
            <CustomButton onClick={this.next.bind(this)} value='next'/>
            :
            <Link to='/download'>
              <CustomButton value='render' />
            </Link>
          }
        </div>
      </div>
    )
  }
}