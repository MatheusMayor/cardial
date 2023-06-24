import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import Map from "../../components/Map/index.js";
// core components
import "../../assets/css/download.css"

function Download() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">Se permita!</h3>
              <h5 className="description">
              Descubra os produtos  da Cardial I.T. e aproveite todas as vantagens que eles têm a oferecer! Explore soluções inovadoras desenvolvidas por especialistas em tecnologia e descubra como nossos produtos podem impulsionar o crescimento do seu negócio. Não perca a oportunidade de conhecer a Cardial I.T. e leve sua empresa para o próximo nível da transformação digital.
              </h5>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round mr-1"
                color="danger"
                href="https://api.whatsapp.com/send?phone=5548996935045&text=Ol%c3%a1!+Gostaria+de+saber+mais+sobre+os+planos+de+marketing+da+cardial+mkt.+"
                role="button"
                size="lg"
              >
                Fale conosco
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center sharing-area text-center">
            <div className="map-section">
              <h3 className="title">Localização</h3>
              <Map />
            </div>
          </Row>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Obrigado pela visita!</h3>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Download;
