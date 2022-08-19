import React, { useState } from "react";
import Project from "./components/Project";
import { IProjects } from "./interface/IProjects";
import { motion } from "framer-motion";

const Projects: React.FC<IProjects> = ({ title, data, tags }: IProjects) => {
  const [projectList, setProjectList] = useState(data);
  const [activeTag, setActiveTag] = useState("all");
  const onActiveTagChange = (newTag) => {
    setActiveTag(newTag);
  };

  return (
    <motion.div
      whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
      initial={{ x: 10, opacity: 0 }}
      className="project-list"
    >
      <div className="project-list__header card">
        <h2 className="title">
          {title}({data.length})
        </h2>
        <div className="tags">
          <span className={`tag ${activeTag === "all" && "active-tag"}`}>
            All
          </span>
          {tags.map((tag, index) => {
            return (
              <span
                key={`${title}-${tag}-${index}`}
                className={`tag ${activeTag === "tag" && "active-tag"}`}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>

      <div className="projects">
        {projectList.map((project, index) => {
          return (
            <motion.div
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: index + 0.85 },
              }}
              initial={{ x: 10, opacity: 0 }}
              className="project card"
            >
              <Project
                key={`${project.title}-${index}`}
                imgUrl={project.imgUrl}
                technologies={project.technologies}
                title={project.title}
                description={project.description}
                website={project.website}
                github={project.github}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
