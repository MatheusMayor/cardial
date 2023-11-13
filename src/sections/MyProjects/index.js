import React from "react";
import "./styles.css";
import ImageMe from "../../assets/me.jpeg";
import Roll from "react-reveal/Roll";
import { Player } from "video-react";
import image1 from "../../assets/nasa.gif";
import image2 from "../../assets/ecommerce.gif";
import image3 from "../../assets/inovafakenews.gif";
import image4 from "../../assets/twitter-clone.gif";
import { DiGithubBadge } from "react-icons/di";
import { BsLink45Deg } from "react-icons/bs";
import Tilt from "react-tilt";

function MyProjects() {
  return (
    <div className="section-projects" id="projetos">
      <div className="title-div">
        <h1>Projetos</h1>
        <div className="blue">.</div>
      </div>

      <div className="projects">
        <div className="project-1">
          <Roll left>
            <div className="preject-preview">
              <h2 className="title-project">NASA-Project - 2022</h2>
              <img src={image1} className="gif-project" />
            </div>
          </Roll>

          <Roll right>
            <div className="project-description">
              Aplicação simples em react afim de experimentar a API Nasa e a lib
              Granulation, Efeito de animação para aplicações JS O resultado
              ficou bem interessante, uma aplicação onde apresenta a Astronomy
              Picture of the Day um endpoint bem conhecido onde pode-se
              visualizar uma imagem e uma curiosidade de astronomia por dia.
              Além de uma seção de imagem policromática da terra e uma seção com
              imagens de Marte usando os rovers Curiosity, Opportunity e Spirit.
              <div className="containers-link">
                <Tilt
                  className="Tilt"
                  options={{ max: 25 }}
                  style={{ height: 50, width: 50 }}
                >
                  <a
                    href="https://nasa-apod-seven.vercel.app/"
                    className="link-project"
                    target="_blank"
                  >
                    <BsLink45Deg />
                  </a>
                </Tilt>
                <Tilt
                  className="Tilt"
                  options={{ max: 25 }}
                  style={{ height: 50, width: 50 }}
                >
                  <a
                    href="https://github.com/ThalisAntunesDaSilva/nasa"
                    className="link-project"
                    target="_blank"
                  >
                    <DiGithubBadge />
                  </a>
                </Tilt>
              </div>
            </div>
          </Roll>
        </div>

        <div className="project-1">
          <Roll right>
            <div className="preject-preview">
              <h2 className="title-project">E-Commerce - 2022</h2>
              <img src={image2} className="gif-project" />
            </div>
          </Roll>

          <Roll left>
            <div className="project-description">
              E-commerce React JS, usando um servidor Nodejs, além de aumentar
              meus conhecimentos com Rest API’s usando Stripe API e Google Maps
              API. Neste projeto é possível ver os produtos do meu server,
              visualizar o produto selecionado com Zoom e por fim, comprar o
              produto com o modo teste de pagamentos do Stripe. Futuramente
              desejo realizar implementações de mais funcionalidades e melhorias
              visando a experiência do usuário e usabilidade.
              <div className="containers-link">
                <Tilt
                  className="Tilt"
                  options={{ max: 25 }}
                  style={{ height: 50, width: 50 }}
                >
                  <a
                    href="https://e-commerce-thalisantunesdasilva.vercel.app/"
                    className="link-project"
                    target="_blank"
                  >
                    <BsLink45Deg />
                  </a>
                </Tilt>
                <Tilt
                  className="Tilt"
                  options={{ max: 25 }}
                  style={{ height: 50, width: 50 }}
                >
                  <a
                    href="https://github.com/ThalisAntunesDaSilva/e-commerce"
                    className="link-project"
                    target="_blank"
                  >
                    <DiGithubBadge />
                  </a>
                </Tilt>
              </div>
            </div>
          </Roll>
        </div>

        <div className="project-1">
          <Roll left>
            <div className="preject-preview">
              <h2 className="title-project">Clone Twitter - 2021</h2>
              <img src={image4} className="gif-project" />
            </div>
          </Roll>

          <Roll right>
            <div className="project-description">
              Clone do nosso querido Twitter, aula de UI clone proposto pela
              Rocketseat! E o resultado ficou incrível!. Nessa aula coloquei um
              prática mais um pouco dos meus conhecimentos de React usando
              TypeScript, aprimorei minhas habilidades com Styled-components que
              é uma biblioteca que utiliza CSS no TypeScript dessa forma eu
              posso reaproveitar a implementar os estilos com mais rapidez e
              facilidade. Aprendi tornar minhas telas responsivas usando o Media
              Query que é um módulo CSS que renderiza o conteúdo, assim os
              componentes se adaptam as condições da Tela.
              <div className="containers-link">
                <Tilt
                  className="Tilt"
                  options={{ max: 25 }}
                  style={{ height: 50, width: 50 }}
                >
                  <a
                    href="https://sleepy-keller-2d1efc.netlify.app/"
                    className="link-project"
                    target="_blank"
                  >
                    <BsLink45Deg />
                  </a>
                </Tilt>
                <Tilt
                  className="Tilt"
                  options={{ max: 25 }}
                  style={{ height: 50, width: 50 }}
                >
                  <a
                    href="https://github.com/ThalisAntunesDaSilva/Twitter"
                    className="link-project"
                    target="_blank"
                  >
                    <DiGithubBadge />
                  </a>
                </Tilt>
              </div>
            </div>
          </Roll>
        </div>

        <div className="project-1">
          <Roll right>
            <div className="preject-preview">
              <h2 className="title-project">Inova-Fake-News - 2020</h2>
              <img src={image3} className="gif-project" />
            </div>
          </Roll>

          <Roll left>
            <div className="project-description">
              Primeiro projeto feito 100% por minha autoria em React JS,
              realizei a implementação do que seria uma aplicação Web do Inova
              Fake News, uma plataforma para auditores avaliar notícias e
              detectar possíveis Fake News.
              <div className="containers-link">
                <Tilt
                  className="Tilt"
                  options={{ max: 25 }}
                  style={{ height: 50, width: 50 }}
                >
                  <a
                    href="https://web-inova-fake-news-open-source.vercel.app/"
                    className="link-project"
                    target="_blank"
                  >
                    <BsLink45Deg />
                  </a>
                </Tilt>
                <Tilt
                  className="Tilt"
                  options={{ max: 25 }}
                  style={{ height: 50, width: 50 }}
                >
                  <a
                    href="https://github.com/ThalisAntunesDaSilva/Web-inova-fake-news-open-source"
                    className="link-project"
                    target="_blank"
                  >
                    <DiGithubBadge />
                  </a>
                </Tilt>
              </div>
            </div>
          </Roll>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
