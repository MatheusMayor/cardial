import React from "react";
import "./styles.css";
import ImageMe from "../../assets/eu.png";
import Roll from "react-reveal/Roll";
import Tilt from "react-tilt";

function AboutMe() {
  return (
    <div className="section" id="sobre">
      <div className="about-data">
        <Roll left>
          <div className="description-biography">
            <h1 className="title-biography">Sobre</h1>
            Olá! Meu nome é Thalis Antunes, sou apaixonado por tecnologia, adoro
            explorar e aprimorar minhas habilidades com programação e testes de
            software.
            <br />
            Foco em automação de testes e análise de resultados. Tenho como meta
            encontrar e resolver problemas, garantindo a eficácia e qualidade de
            todos os produtos que testo. Sou estudante de Engenharia de Software
            na Universidade Federal do Pampa. Acumulo conhecimentos e vivências
            criando sistemas back-end, front-end, mobile e realizando testes de
            software.
            <br />
            <br />
            Tenho boa dicção, sou organizado, comunicativo e flexível para
            negociações e entendimento de regras de negócio, sempre buscando dar
            o melhor em minhas atuações. Estou buscando novos desafios, é você
            que vai me dar essa oportunidade?
          </div>
        </Roll>
        <Roll right>
          <Tilt className="Tilt" options={{ axis: 40 }}>
            <img className="image-me" src={ImageMe} />
          </Tilt>
        </Roll>
      </div>
    </div>
  );
}

export default AboutMe;
