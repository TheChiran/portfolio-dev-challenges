import { motion } from "framer-motion";
import React from "react";
import { ExperienceData } from "../interface/IExperiences";

const Experience: React.FC<ExperienceData> = ({
  duration,
  designation,
  description,
  logoUrl,
}: ExperienceData) => {
  return (
    <motion.div
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.85 },
      }}
      initial={{ y: 10, opacity: 0 }}
      className="experience"
    >
      <div className="experience__image-wrapper">
        <img src={logoUrl} alt="" />
      </div>
      <div className="experience__details">
        <h2 className="experience__details__duration">{duration}</h2>
        <h2 className="experience__details__designation">{designation}</h2>
        <h2 className="experience__details__description">{description}</h2>
      </div>
    </motion.div>
  );
};

export default Experience;
