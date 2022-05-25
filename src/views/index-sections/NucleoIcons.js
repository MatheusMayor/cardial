import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import Roll from 'react-reveal/Roll';

// core components

function NucleoIcons() {
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
                src={require("assets/img/strategy.jpg").default}
              ></img>
            </Col>
            <Col lg="6" md="12">
              <h2 className="title">Monte uma estratégia</h2>
              <h5 className="description">
                Conhecemos seu negócio, seus pontos fortes e fracos, comparamos
                com a concorrência, focamos no público certo e geramos
                resultados eficazes e eficientes.
              </h5>
            </Col>
          </Row>
          </Roll>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
