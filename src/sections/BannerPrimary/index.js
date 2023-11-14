import React from "react";
import "./styles.css";
import { FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import TypeAnimation from "react-type-animation";
import Tilt from "react-tilt";
import herohome from "../../assets/herohome.svg";
import iconmao from "../../assets/mao.svg";
import iconlampada from "../../assets/lampada.svg";
import iconpaz from "../../assets/paz.svg";
import guerra from "../../assets/drguerra.svg";

export default function BannerPrimary() {
  return (
    <div className="section-start">
      <h1 className="title-banner">
        Construa o futuro<br /> do seu negócio
      </h1>
      <div className="apresentation-description">
        <img className="herohome" src={herohome} alt="Imagem do Herói" />
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
          <button className="button-social-media">Ver mais</button>
        </Tilt>
      </a>
      <p className="contact-us"></p>
      <div className="porque-criar-um-projeto">
        <h2>Por que criar um projeto com a Cardial I.T?</h2>
      </div>

      <div className="card-container">
        <div className="transforme-seu-negocio-em-tecnologia" id="card1">
          <h2>Transforme seu negócio em tecnologia</h2>
          <img src={iconmao} className="iconmao" />
          <p>
            Com a Cardial I.T você pode revolucionar o seu negócio com soluções
            tecnológicas inovadoras. Transforme sua ideia em realidade
          </p>
        </div>

        <div className="aplicativos-com-solucoes-inovadoras" id="card2">
          <h2>Aplicativos com Soluções Inovadoras</h2>
          <img src={iconlampada} className="iconlampada" />
          <p>
            Crie aplicativos de última geração, projetados para atender às suas
            necessidades específicas. Inovação e funcionalidade em um só lugar.
          </p>
        </div>

        <div className="uma-equipe-de-ti-a-sua-disposicao" id="card3">
          <h2>Uma Equipe de TI à Sua Disposição</h2>
          <img src={iconpaz} className="iconpaz" />
          <p>
            Conte com nossa equipe de especialistas em tecnologia para atender às
            suas demandas. Estamos aqui para apoiar o seu sucesso com soluções
            personalizadas.
          </p>
        </div>
      </div>

      <div className="dr-guerra" id="guerra">
        <h2>Dr.Guerra</h2>
        <img src={guerra} className="drguerra" />
        <p>
          Looking for an amazing copywriter using Open Enterprise to help us write an article on how to get started.
        </p>
      </div>
    </div>
  );
}
