import React from 'react';
import TextInput from '../molecules/TextInput';

import './styles/ProjectSettings.css';

export default function ProjectSettings({projectName, currentName}){

  function log(input) {
    projectName(input.target.value);
  }
  return(
    <TextInput done={log} value={currentName}/>
  )
}