import React from "react";
import Zoom from 'react-reveal/Zoom';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

import { SocialMedia } from "../../assets/img/social-media.jpg";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs" id="about-us">
      <Zoom center>
        <Container>
          <h4>Sobre nós</h4>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Biografia</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem></NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <h5>
                     
Bem-vindo à Cardial I.T - sua solução completa de software delivery para pequenas e médias empresas. Oferecemos um aplicativo de indicações poderoso, que transforma clientes satisfeitos em promotores da sua marca, além de criar Landing Pages personalizadas para impulsionar sua presença online. Junte-se a nós e expanda sua base de clientes de forma eficiente e atraente!
                      </h5>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Serviços</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem></NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <h5>
                      Com nosso aplicativo de indicações, transformamos seus clientes em promotores entusiasmados, aumentando sua base de clientes de forma orgânica. Além disso, nossa expertise em criação de landing pages personalizadas garante uma presença online marcante e resultados impactantes. Confie na Cardial I.T para impulsionar sua empresa e conquistar o sucesso que você merece.
                      </h5>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        </Zoom>
      </div>
    </>
  );
}

export default Tabs;
