import * as React from "react";
import PersonCard from "../common/PersonCard";
import "./../../assets/styles/style.scss";
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
import { motion, AnimatePresence } from "framer-motion";
import { personDetail } from "../../data/person-data";

const DefaultLayout: React.FC = () => {
  return (
    <div className="default_layout">
      <div className="row">
        <PersonCard
          name={personDetail.name}
          profession={personDetail.profession}
          email={personDetail.email}
          phone={personDetail.phone}
          summary={personDetail.summary}
          imgUrl={personDetail.imgUrl}
          linkedIn={{
            name: personDetail.linkedIn.name,
            url: personDetail.linkedIn.url,
          }}
          github={{
            name: personDetail.github.name,
            url: personDetail.github.url,
          }}
        />
      </div>
      <div className="row">
        <div className="col-1">
          <div className="skill-list">
            <SKillList title={skillSet.title} data={skillSet.list} />
            <SKillList title={toolsSet.title} data={toolsSet.list} />
          </div>
          <div className="hobby-list">
            <Hobbies title="Hobbies" data={hobbyList} />
          </div>
        </div>
        <div className="col-2">
          <Experiences title={"Experiences"} data={experienceDataList} />
          <BlogsList title={"Blogs"} data={blogs} />
        </div>
      </div>
      <Projects
        title={"Projects"}
        tags={["HTML", "React", "CSS", "SCSS", "Responsive"]}
        data={ProjectList}
      />
      <footer>
        <p>
          Created by <a href="https://chirantonmoy.vercel.app/">chiranSWE</a> -
          devChallenges.io
        </p>
      </footer>
    </div>
  );
};

export default DefaultLayout;
