import React, { useState } from 'react';

import './styles/LowerThirds.css';

export default function LowerThirds(){
  const [number, setNumber] = useState();

  function renderLT() {
    try {
      fetch(`http://localhost:5000/lowerthirds/${number}`, {
        method: "POST",
        body: {
          "name": "Joppe",
          "title": "student"
        },
      })
      .then(data => data.json())
      .then(data => {
        console.log(data);
      });
    } catch(err) {
      console.log(err)
    }
  }

  return(
    <div>
      <input type="text" placeholder="name"/>
        <br/>
        <input type="text" placeholder="title"/>
        <div className="lowerthirds">
        <div className="lowerthirdsDiv">
          <img src="https://res.cloudinary.com/pitch-fx/image/upload/v1637577270/GIF/LT1_1_ztqysq.gif" onClick={() => setNumber(1)}/>
        </div>
        <div className="lowerthirdsDiv">
          <img src="https://res.cloudinary.com/pitch-fx/image/upload/v1637577270/GIF/LT2_2_jyhpm1.gif" onClick={() => setNumber(2)}/>
        </div>
        <div className="lowerthirdsDiv">
          <img src="https://res.cloudinary.com/pitch-fx/image/upload/v1637577270/GIF/LT3_awcluh.gif" onClick={() => setNumber(3)}/>
        </div>
      </div>
    </div>
  )
}