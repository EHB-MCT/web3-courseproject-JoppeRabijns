import React from "react";
import "./Socials.css";
import FeatherIcon from "feather-icons-react";

const Socials = () => {
  return (
    <div className="socials">
      <a
        href="https://www.linkedin.com/in/joppe-rabijns/"
        target="_blank"
        rel="noreferrer"
      >
        <FeatherIcon size="24" classname="icon" icon="linkedin" />
      </a>
      <a
        href="https://www.instagram.com/joppe.rabijns/"
        target="_blank"
        rel="noreferrer"
      >
        <FeatherIcon size="24" classname="icon" icon="instagram" />
      </a>
      <a
        href="https://github.com/JoppeRabijns"
        target="_blank"
        rel="noreferrer"
      >
        <FeatherIcon size="24" classname="icon" icon="github" />
      </a>
    </div>
  );
};

export default Socials;
