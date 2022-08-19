import React from "react";
import Experience from "./component/Experience";
import { IExperiences } from "./interface/IExperiences";

const Experiences: React.FC<IExperiences> = ({ title, data }: IExperiences) => {
  return (
    <div className="experiences card">
      <h2 className="experiences__title">{title}</h2>
      <div className="experiences__data">
        {data.map((experience, index) => {
          return (
            <Experience
              key={`${experience.designation}-${index}`}
              duration={experience.duration}
              designation={experience.designation}
              logoUrl={experience.logoUrl}
              description={experience.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
