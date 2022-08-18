import * as React from "react";
import PersonCard from "../common/PersonCard";
import ProjectList from "../common/ProjectList";
import "./../../assets/styles/style.scss";
import { skillSet, toolsSet } from "../../data/skillset-list.js";
import SKillList from "../common/SkillList";

const ExtendedLayout: React.FC = () => {
  return (
    <div className="extended_layout">
      <div className="columns">
        <div className="column1">
          <PersonCard />
        </div>
        <div className="column2">
          <div className="skill-list">
            <SKillList title={skillSet.title} data={skillSet.list} />
            <SKillList title={toolsSet.title} data={toolsSet.list} />
          </div>
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
