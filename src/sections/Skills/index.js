import React from "react";
import Backend from "../../components/Charts/backend";
import Frontend from "../../components/Charts/frontend";
import Fade from "react-reveal/Fade";

import "./styles.css";

function Skills() {
  return (
    <div className="skills-sections">
      <div className="title-div">
        <h1>Habilidades</h1>
        <div className="blue">.</div>
      </div>

      <div className="row-1">
        <Fade left></Fade>
        <Fade right>
          <div className="graphic-1">
            <h3>Skills</h3>
            <Frontend />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Skills;
