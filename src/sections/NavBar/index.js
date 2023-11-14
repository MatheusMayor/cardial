import React from "react";
import "./styles.css";
import Tilt from "react-tilt";
import cardialIcon from '../../assets/cardial-icon.svg';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="cardial-home">
        <img className='cardial-icon' src={cardialIcon} />
        <a className='cardial-name'>CARDIAL I.T</a>
      </div>
      <div className="links">
        <Tilt
          className="Tilt"
          options={{ max: 25 }}
          style={{ height: 90, width: 250 }}
        >
          <a className="link" href="#sobre">
            Sobre nós
          </a>
        </Tilt>
        <Tilt
          className="Tilt"
          options={{ max: 25 }}
          style={{ height: 50, width: 400 }}
        >
          <a className="link" href="#projetos">
            Nossos Produtos
          </a>
        </Tilt>
        <Tilt
          className="Tilt"
          options={{ max: 20 }}
          style={{ height: 50, width: 200 }}
        >
          <a className="link" href="#experiencia">
            Equipe
          </a>
        </Tilt>
      </div>


    </div>
  );
}