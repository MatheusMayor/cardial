import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import Roll from "react-reveal/Roll";

// core components

function UpdateSales() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Roll left>
            <Row>
              <Col lg="6" md="12">
                <h2 className="title">Um site com a cara da sua empresa</h2>
                <h5 className="description">
                Destaque-se com uma presença online profissional.
Atraia e converta mais clientes.
Design adaptável a todos os dispositivos.
Comunique sua proposta de valor de forma eficaz.
Obtenha resultados rápidos e impactantes.
                </h5>
              </Col>
              <Col lg="6" md="12">
                <img
                 id="image-app"
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/landing-pages.png").default}
                ></img>
              </Col>
            </Row>
          </Roll>
        </Container>
      </div>
    </>
  );
}

export default UpdateSales;
