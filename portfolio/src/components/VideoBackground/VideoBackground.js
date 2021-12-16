import React from "react";
import "./videoBackground.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const VideoBackground = (props) => {
  return (
    <TransitionGroup>
      <CSSTransition key={props.number} timeout={1000} classNames="videoout">
        {props.url === "" || window.innerWidth < 769 ? (
          <img className="image" src={props.imageUrl} alt="" />
        ) : (
          <video
            autoPlay
            muted
            loop
            className="video"
            src={props.url}
            type="video/mp4"
          />
        )}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default VideoBackground;
