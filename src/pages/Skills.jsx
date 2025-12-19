import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaGitAlt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import "./skills.css";
const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h2>Skills</h2>
      <div className="tecnologies">
        <div className="icon html" data-tooltip="HTML">
          <FaHtml5 />
        </div>
        <div className="icon css" data-tooltip="CSS">
          <FaCss3Alt />
        </div>
        <div className="icon js" data-tooltip="JavaScript">
          <SiJavascript />
        </div>
        <div className="icon react" data-tooltip="React">
          <FaReact />
        </div>
        <div className="icon sass" data-tooltip="SASS">
          <FaSass />
        </div>
        <div className="icon git" data-tooltip="Git">
          <FaGitAlt />
        </div>
      </div>
    </div>
  );
};

export default Skills;
