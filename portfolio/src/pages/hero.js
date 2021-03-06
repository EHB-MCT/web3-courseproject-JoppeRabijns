import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./styles/hero.css";

import Home from "./home";
import Project from "./project";
import Contact from "./contact";

const Hero = () => {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [displayLocation, location]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Switch location={displayLocation}>
        <Route path="/" exact component={Home} />
        <Route path="/project/:number" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
};

export default Hero;
