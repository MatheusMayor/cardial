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
                id="image-app"
                src={require("assets/img/appguerra.png").default}
              ></img>
            </Col>
            <Col lg="6" md="12">
              <h2 className="title">Indique e expanda</h2>
              <h5 className="description" color="black">
              Seus clientes são sua melhor propaganda, e é por isso que lançamos nosso aplicativo de indicações. Com ele, seu cliente indica amigos, aumentando mais sua carteira de clientes.
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
