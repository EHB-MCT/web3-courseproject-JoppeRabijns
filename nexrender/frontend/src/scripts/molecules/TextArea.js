import React from 'react';

import './styles/TextArea.css';

export default function TextArea(props){
  const placeholder = 'Type your text here. When you leave this field, your text will be translated. \n\nYou need a stable internet connection for this step.'
  return(
    <textarea className="textArea" placeholder={placeholder} onBlur={props.done}/>
  )
}