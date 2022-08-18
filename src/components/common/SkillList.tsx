import React from "react";
import { Tag, TagGroup } from "rsuite";
import { ISkillList } from "../../componentPropTypes/ISkillList";

const SKillList: React.FC<ISkillList> = ({ title, data }: ISkillList) => {
  return (
    <div className="skills card">
      <h2 className="skills__title">{title}</h2>
      <div className="skills__data">
        <TagGroup>
          {data.map((value, index) => {
            return <Tag key={`${value}-${index}`}>{value}</Tag>;
          })}
        </TagGroup>
      </div>
    </div>
  );
};

export default SKillList;
