import { motion } from "framer-motion";
import React from "react";
import { Tag, TagGroup } from "rsuite";
import { ISkillList } from "../../componentPropTypes/ISkillList";

const SKillList: React.FC<ISkillList> = ({ title, data }: ISkillList) => {
  return (
    <motion.div
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.85 },
      }}
      initial={{ x: -10, opacity: 0 }}
      className="skills card"
    >
      <h2 className="skills__title">{title}</h2>
      <div className="skills__data">
        <TagGroup>
          {data.map((value, index) => {
            return <Tag key={`${value}-${index}`}>{value}</Tag>;
          })}
        </TagGroup>
      </div>
    </motion.div>
  );
};

export default SKillList;
