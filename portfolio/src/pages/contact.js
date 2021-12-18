import React from "react";
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
            <FeatherIcon size="24" className="icon" icon="user" />
            <span> Joppe Rabijns</span>
          </h3>
          <h3>
            <FeatherIcon size="24" className="icon" icon="mail" />
            <span> joppe@rabijns.be</span>
          </h3>
          <h3>
            <FeatherIcon size="24" className="icon" icon="phone" />
            <span> 0478027029</span>
          </h3>
          <h3>
            <FeatherIcon size="24" className="icon" icon="map-pin" />
            <span> Onderwijslaan 29, 3910 PELT</span>
          </h3>
        </div>
      </div>
      <Socials />
    </div>
  );
};

export default Contact;
