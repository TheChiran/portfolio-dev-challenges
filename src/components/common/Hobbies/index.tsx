import React from "react";
import Hobby from "./component/Hobby";
import { IHobby } from "./Prop interface/IHobby";

const Hobbies: React.FC<IHobby> = ({ title, data }: IHobby) => {
  return (
    <div className="hobbies card">
      <h2 className="hobbies__title">{title}</h2>
      <div className="hobbies__data">
        {data.map((hobby, index) => {
          return (
            <Hobby
              key={`${hobby.title}-${index}`}
              title={hobby.title}
              subTitle={hobby.subTitle}
              imgUrl={hobby.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hobbies;
