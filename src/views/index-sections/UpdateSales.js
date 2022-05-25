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
                <h2 className="title">Atinja mais público</h2>
                <h5 className="description">
                  O gerenciamento de trafego organico e pago, expande conteúdo
                  para pessoas que ainda não conhecem sua marca. Muito
                  importante pois esse novo público tornam-se clientes em
                  potencial para seu negócio.
                </h5>
              </Col>
              <Col lg="6" md="12">
                <img
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/man-public.jpg").default}
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
