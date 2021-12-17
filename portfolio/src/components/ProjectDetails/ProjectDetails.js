import React from "react";
import "./ProjectDetails.css";

const ProjectDetails = (props) => {
  return (
    <div className="main">
      <div className="info">
        <h1>{props.project.title}</h1>
        <p>{props.project.info}</p>
      </div>
      {props.project.vimeoUrl === "" ? (
        props.project.githubUrl !== "" && window.innerWidth > 600 ? (
          <iframe
            src={props.project.githubUrl}
            title={props.project.title}
            width={window.innerWidth - window.innerWidth / 10}
            height={(window.innerWidth / 16) * 8}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            className="vimeo"
          ></iframe>
        ) : (
          <>
            <img className="detailImage" src={props.project.imageUrl} alt="" />
            <h4 className="link">
              <a
                href={props.project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                {props.project.githubUrl}
              </a>
            </h4>
          </>
        )
      ) : (
        <iframe
          src={props.project.vimeoUrl}
          title={props.project.title}
          width={window.innerWidth - window.innerWidth / 8}
          height={(window.innerWidth / 16) * 9}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          className="vimeo"
        ></iframe>
      )}
    </div>
  );
};

export default ProjectDetails;
