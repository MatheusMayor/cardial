import React from "react";
import "./styles.css";
import { FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import TypeAnimation from "react-type-animation";
import Tilt from "react-tilt";

export default function BannerPrimary() {
  /* 
  
  */

  return (
    <div className="section-start">
      <h1 className="title-banner">
        Construa o futuro<br></br> do seu negócio!
      </h1>
      <div className="apresentation-description">
        <TypeAnimation
          cursor={true}
          sequence={[
            "Somos uma empresa de desenvolvimento de software, focada em soluções de prontidão e eficazes.",
            10000,
            "",
          ]}
          wrapper="h4"
          repeat={Infinity}
        />
      </div>

      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5555999293516&text=Ol%C3%A1%20Thalis%2C%20peguei%20seu%20n%C3%BAmero%20atrav%C3%A9s%20do%20seu%20Portf%C3%B3lio."
      >
        <Tilt
          className="tilt"
          options={{ max: 25 }}
          style={{ height: 50, width: 250 }}
        >
          <button className="button-social-media">
            Fale comigo agora!
            <FiSend className="icon-send" />
          </button>
        </Tilt>
      </a>
    </div>
  );
}
