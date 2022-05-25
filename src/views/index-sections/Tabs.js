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
                        Criada em 2022 por um grupo de desenvolvedores e
                        estudantes de marketing digital, a Cardial nasceu de uma
                        necessidade atender pequenas e médias empresas que ainda
                        não se adaptaram a nova forma de captar público ao seu
                        negócio com as tecnologias atuais.
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
                        Oferecemos consultoria e planejamento de Marketing, estratégia de engajamento de público, criação de conteúdo, captação de clientes, padronização de redes sociais,
                        gerenciamento de tráfego e construção de Websites inteligentes que convertem visitantes em vendas.
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
