import React from "react";

import "./styles/TextInput.css";

export default function TextInput({ done, value }) {
  return (
    <input
      type="text"
      className="textInput"
      placeholder={value}
      onBlur={done}
    />
  );
}
