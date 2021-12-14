import React, { useState, useRef } from "react";
import Socials from "../components/Socials/Socials";
import FeatherIcon from "feather-icons-react";

import "./styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="title">
        Contacteer <span>Mij</span>
      </h1>
      <div className="personal">
        <img
          src="https://res.cloudinary.com/drxe6ukjd/image/upload/v1639408281/portfolio/avatar_tdh8au.jpg"
          alt=""
        />
        <div className="details">
          <h3>
            <FeatherIcon size="24" classname="icon" icon="user" />
            Joppe Rabijns
          </h3>
          <h3>
            <FeatherIcon size="24" classname="icon" icon="mail" />
            joppe@rabijns.be
          </h3>
          <h3>
            <FeatherIcon size="24" classname="icon" icon="phone" />
            0478027029
          </h3>
          <h3>
            <FeatherIcon size="24" classname="icon" icon="map-pin" />
            Onderwijslaan 29, 3910 PELT
          </h3>
        </div>
      </div>
      <Socials />
    </div>
  );
};

export default Contact;
