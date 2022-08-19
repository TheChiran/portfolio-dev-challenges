import * as React from "react";
import { ProjectData } from "../interface/IProjects";

const Project: React.FC<ProjectData> = ({
  title,
  description,
  imgUrl,
  technologies,
  website,
  github,
}: ProjectData) => {
  return (
    <>
      <div className="project__image-wrapper">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="project__contents">
        <div className="technologies">
          {technologies.map((technology, index) => {
            return (
              <span key={`${technology}-${index}`}>{`#${technology}`}</span>
            );
          })}
        </div>
        <h2 className="title">{title}</h2>
        <h2 className="description">{description}</h2>
        <div className="links">
          <a href={website} className="website">
            Demo
          </a>
          <a href={github} className="code">
            Code
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
