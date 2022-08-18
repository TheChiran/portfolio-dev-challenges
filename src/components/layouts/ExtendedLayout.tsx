import * as React from "react";
import PersonCard from "../common/PersonCard";
import { skillSet, toolsSet } from "../../data/skillset-list.js";
import { hobbyList } from "../../data/hobbies.js";
import SKillList from "../common/SkillList";
import Hobbies from "../common/Hobbies";
import Experiences from "../common/Experiences";
import { experienceDataList } from "../../data/experience-data";
import BlogsList from "../common/blogs";
import { blogs } from "../../data/blogs-data";
import Projects from "../common/Projects";
import { ProjectList } from "../../data/project-list";

const ExtendedLayout: React.FC = () => {
  return (
    <div className="extended_layout">
      <div className="columns">
        <div className="column1">
          <PersonCard />
          <Experiences title={"Experiences"} data={experienceDataList} />
          <div className="hobby-list">
            <Hobbies title="Hobbies" data={hobbyList} />
          </div>
        </div>
        <div className="column2">
          <div className="skill-list">
            <SKillList title={skillSet.title} data={skillSet.list} />
            <SKillList title={toolsSet.title} data={toolsSet.list} />
          </div>
          <Projects
            title={"Projects"}
            tags={["HTML", "React", "CSS", "SCSS", "Responsive"]}
            data={ProjectList}
          />
          <BlogsList title={"Blogs"} data={blogs} />
        </div>
      </div>

      <footer>
        <p>
          Created by <a href="https://chirantonmoy.vercel.app/">chiranSWE</a> -
          devChallenges.io
        </p>
      </footer>
    </div>
  );
};

export default ExtendedLayout;
