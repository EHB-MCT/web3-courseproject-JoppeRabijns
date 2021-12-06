import React from 'react'

import './styles/Button.css'

export default function CustomButton({value, onClick=undefined}){
  return(
    <button onClick={onClick} className="navButton">{value}</button>
  )
}