import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

function Examples() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
    
      <div className="wrapper">
    
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Nosso time</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="Iago Mendonça"
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/iago.jpg").default}
                    ></img>
                    <h4 className="title">Iago</h4>
                    <p id="cargo"className="category text-info">Dev Back-end</p>
                    <p id="cargo" className="description">
    Iago é um desenvolvedor back-end. Graduando Análise e Desenvolvimento de Sistemas. Com 25 anos de idade, ele reside em Torres, no estado do Rio Grande do Sul.

                   
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://www.linkedin.com/in/iago-mendonca/"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="iago.mendonca20@gmail.com"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/thalis.jpg").default}
                    ></img>
                    <h4 className="title">Thalis</h4>
                    <p className="category text-info">Product Owner</p>
                    <p className="description">
                    Thalis é responsável pela gestão de qualidade do produto. Graduado em Engenharia de Software. Com 24 anos de idade, ele reside em Curitiba, no estado do Paraná.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://www.linkedin.com/in/thalisantunes/"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="thalisantunes100@gmail.com"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/arian.jpg").default}
                    ></img>
                    <h4 className="title">Arian</h4>
                    <p className="category text-info">Dev Front-End</p>
                    <p className="description">
                    Arian é um desenvolvedor front-end. Graduando Análise e Desenvolvimento de Sistemas. Com 26 anos de idade, ele reside em Alegrete, no estado do Rio Grande do Sul.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://www.linkedin.com/in/ariansiqueira/"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="arian.mensiq@gmail.com"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                    </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          {/* <Container>
            <h2 className="title">Want to work with us?</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container> */}
        </div>
      
      </div>
    </>
  );
}

export default Examples;
