import React from 'react'

import './styles/Button.css'

export default function CustomButton(props){
  return(
    <button onClick={props?.onClick}>{props.value}</button>
  )
}