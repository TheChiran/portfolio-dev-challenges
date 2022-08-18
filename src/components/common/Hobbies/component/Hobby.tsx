import React from "react";
import { HobbyData } from "../Prop interface/IHobby";

const Hobby: React.FC<HobbyData> = ({ title, imgUrl, subTitle }: HobbyData) => {
  return (
    <div className="hobby">
      <div className="hobby__image-wrapper">
        <img src={imgUrl} alt="" />
      </div>
      <h2 className="hobby__title">{title}</h2>
      <h2 className="hobby__sub-title">{subTitle}</h2>
    </div>
  );
};

export default Hobby;
