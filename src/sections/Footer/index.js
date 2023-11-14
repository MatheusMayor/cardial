import React from 'react';
import Map from "../../components/Map/index";
import "./styles.css";

function Footer() {
  return (


    <div className="footer-section">
      <div className="title-div">
        <h1>Localização</h1>
        <div className="blue">.</div>
      </div>
      <Map />
      <span>&copy; 2023 Cardial I.T</span>
    </div>
  )
    ;
}

export default Footer;