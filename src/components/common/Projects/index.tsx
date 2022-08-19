import * as React from "react";
import { Tag, TagGroup } from "rsuite";
import Project from "./components/Project";
import { IProjects } from "./interface/IProjects";

const Projects: React.FC<IProjects> = ({ title, data, tags }: IProjects) => {
  return (
    <div className="project-list">
      <div className="project-list__header card">
        <h2 className="title">
          {title}({data.length})
        </h2>
        <div className="tags">
          {tags.map((tag, index) => {
            return (
              <span
                key={`${title}-${tag}-${index}`}
                className={`tag ${index === 0 && "active-tag"}`}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>

      <div className="projects">
        {data.map((project, index) => {
          return (
            <Project
              key={`${project.title}-${index}`}
              imgUrl={project.imgUrl}
              technologies={project.technologies}
              title={project.title}
              description={project.description}
              website={project.website}
              github={project.github}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
