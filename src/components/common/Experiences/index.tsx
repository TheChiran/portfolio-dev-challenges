import React from "react";
import { motion } from "framer-motion";
import Experience from "./component/Experience";
import { IExperiences } from "./interface/IExperiences";

const Experiences: React.FC<IExperiences> = ({ title, data }: IExperiences) => {
  return (
    <motion.div
      whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
      initial={{ x: 10, opacity: 0 }}
      className="experiences card"
    >
      <h2 className="experiences__title">{title}</h2>
      <div className="experiences__data">
        {data.map((experience, index) => {
          return (
            <motion.div
              key={`${experience.designation}-${index}`}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: index + 0.85 },
              }}
              initial={{ y: 10, opacity: 0 }}
            >
              <Experience
                duration={experience.duration}
                designation={experience.designation}
                logoUrl={experience.logoUrl}
                description={experience.description}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Experiences;
