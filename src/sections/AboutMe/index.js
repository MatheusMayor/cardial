import React from "react";
import "./styles.css";
import Roll from "react-reveal/Roll";
import Tilt from "react-tilt";

function AboutMe() {
  return (
    <div className="section" id="sobre">
      <Roll left>
        <div className="banner">
          <Tilt className="Tilt" options={{ axis: 60 }}>
          </Tilt>
          <div className="description-biography">
          </div>
        </div>
      </Roll>

      <div>Veja o que estão falando sobre nós</div>
    </div>
  );
}

export default AboutMe;
