import React from "react";
import { motion } from "framer-motion";
import { HobbyData } from "../Prop interface/IHobby";

const Hobby: React.FC<HobbyData> = ({
  title,
  imgUrl,
  subTitle,
  index,
}: HobbyData) => {
  return (
    <motion.div
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: Number(index + 0.15) },
      }}
      initial={{ y: -10, opacity: 0 }}
      className="hobby"
    >
      <div className="hobby__image-wrapper">
        <img src={imgUrl} alt="" />
      </div>
      <h2 className="hobby__title">{title}</h2>
      <h2 className="hobby__sub-title">{subTitle}</h2>
    </motion.div>
  );
};

export default Hobby;
