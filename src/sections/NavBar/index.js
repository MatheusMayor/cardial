import React from "react";
import "./styles.css";
import Tilt from "react-tilt";
import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="links">
        <Tilt
          className="Tilt"
          options={{ max: 25 }}
          style={{ height: 90, width: 250 }}
        >
          <a className="link" href="#sobre">
           Sobre
          </a>
        </Tilt>
        <Tilt
          className="Tilt"
          options={{ max: 25 }}
          style={{ height: 50, width: 250 }}
        >
          <a className="link" href="#projetos">
            Projetos
          </a>
        </Tilt>
        <Tilt
          className="Tilt"
          options={{ max: 25 }}
          style={{ height: 50, width: 250 }}
        >
          <a className="link" href="#experiencia">
            Experiência
          </a>
        </Tilt>
      </div>

      <div className="icons-social-media">
        <a target="_blank" href="https://github.com/ThalisAntunesDaSilva">
          <Tilt
            className="Tilt"
            options={{ scale: 1.2 }}
            style={{ height: 50, width: 50 }}
          >
            <button className="button-media">
              <DiGithubBadge className="icon" />
            </button>{" "}
          </Tilt>
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/thalisantunes/">
          <Tilt
            className="Tilt"
            options={{ max: 25 }}
            style={{ height: 50, width: 50 }}
          >
            <button className="button-media">
              <BsLinkedin className="icon" />
            </button>{" "}
          </Tilt>
        </a>
      </div>
    </div>
  );
}
