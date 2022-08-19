import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Hobby from "./component/Hobby";
import { IHobby } from "./Prop interface/IHobby";

const Hobbies: React.FC<IHobby> = ({ title, data }: IHobby) => {
  return (
    <motion.div
      whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
      initial={{ x: -10, opacity: 0 }}
      className="hobbies card"
    >
      <h2 className="hobbies__title">{title}</h2>
      <div className="hobbies__data">
        {data.map((hobby, index) => {
          return (
            <Hobby
              key={`${hobby.title}-${index}`}
              index={index}
              title={hobby.title}
              subTitle={hobby.subTitle}
              imgUrl={hobby.imgUrl}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Hobbies;
