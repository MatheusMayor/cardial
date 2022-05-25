import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import Roll from "react-reveal/Roll";

function CreationContent() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Roll right>
            <Row>
              <Col lg="6" md="12">
                <img
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/social-media.jpg").default}
                ></img>
              </Col>
              <Col lg="6" md="12">
                <h2 className="title">Criação de conteúdo</h2>
                <h5 className="description">
                  Geramos conteúdo de qualidade que agrega valor ao usuário que
                  espera da sua rede social algo a mais do que uma simples
                  tentativa de venda de produto. Tornando seu futuro cliente
                  mais a vontade com o seu negócio.
                </h5>
              </Col>
            </Row>
          </Roll>
        </Container>
      </div>
    </>
  );
}

export default CreationContent;
