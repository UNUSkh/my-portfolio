import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { FaNodeJs } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";

import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaJava,
  FaPhp,
  FaHtml5,
  FaCss3Alt ,FaPython
} from "react-icons/fa";
import { SiFlutter,SiDart,SiExpress   } from "react-icons/si";
const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt  />,
    Php: <FaPhp />,
    Dart: <SiDart/>,
    NodeJs: <FaNodeJs />,
    Java: <FaJava />,
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    python: <FaPython  />,
    Flutter: <SiFlutter/>,
    MongoDb: <SiMongodb/>,
    ExpressJs:<SiExpress/>,
    others: <BsThreeDots/>
  };
 
  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
