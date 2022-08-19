import * as React from "react";
import emailIcon from "./../../../assets/images/icons/email.svg";
import phoneIcon from "./../../../assets/images/icons/phone.svg";
import linkedInIcon from "./../../../assets/images/icons/linkedin.svg";
import githubIcon from "./../../../assets/images/icons/github.svg";
import Typed from "react-typed";
import { motion } from "framer-motion";
import IPerson from "./interface/Person";

const PersonCard: React.FC<IPerson> = ({
  name,
  profession,
  email,
  phone,
  github,
  linkedIn,
  imgUrl,
  summary,
}: IPerson) => {
  return (
    <motion.div
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.8 },
      }}
      initial={{ y: -10, opacity: 0 }}
      className="card person_card"
    >
      <div className="person_card__image-wrapper">
        <img src={imgUrl} alt={`${name} image`} />
      </div>
      <div className="person_card__contents">
        <div className="person_card__contents__detail">
          <div className="person-info">
            <h3 className="name">
              <Typed strings={[name]} typeSpeed={40} backSpeed={60} loop />
            </h3>
            <h3 className="profession">{profession}</h3>
          </div>
          <div className="person-contact">
            <h3 className="email">
              <img src={emailIcon} alt="Email Icon" />
              {email}
            </h3>
            <h3 className="phone">
              <img src={phoneIcon} alt="Phone Icon" />
              {phone}
            </h3>
            <h3 className="linked-in">
              <img src={linkedInIcon} alt="Phone Icon" />
              <a href={linkedIn.url} target="_blank">
                {linkedIn.name}
              </a>
            </h3>
            <h3 className="github">
              <img src={githubIcon} alt="Phone Icon" />
              <a href={github.url} target="_blank">
                {github.name}
              </a>
            </h3>
          </div>
        </div>
        <h2 className="person_card__contents__person-overview">{summary}</h2>
      </div>
    </motion.div>
  );
};

export default PersonCard;
