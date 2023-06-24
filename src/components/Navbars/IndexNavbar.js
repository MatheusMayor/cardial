import React from "react";
import { Link } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import "../../assets/css/navbar.css";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="dark">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="https://api.whatsapp.com/send?phone=5548996935045&text=Ol%c3%a1!+Gostaria+de+saber+mais+sobre+os+planos+de+marketing+da+cardial+mkt.+"
              target="_blank"
              id="navbar-brand"
            >
              cardial I.T
            </NavbarBrand>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("about-us").scrollIntoView();
                  }}
                >
                  <p className="option-menu">Sobre nós</p>
                </NavLink>
              </NavItem>
              <NavLink
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("download-section").scrollIntoView();
                }}
              >
                <p className="option-menu"></p>
              </NavLink>
              <NavItem>
                <a href="mailto:thalisantunes@hotmail.com?subject=Conversa com a Cardial&body=Olá tudo bem? fiquei interessado pelos produtos da Cardial, vamos agendar uma conversa?">
                  {" "}
                  <Button
                    className="nav-link btn-neutral"
                    color="black"
                    href=""
                    id="upgrade-to-pro"
                    target="_blank"
                  >
                    <p className="button-text">Fale conosco</p>
                  </Button>
                </a>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Envie um E-mail agora!
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://api.whatsapp.com/send?phone=5548996935045&text=Ol%c3%a1!+Gostaria+de+saber+mais+sobre+os+planos+de+marketing+da+cardial+mkt.+"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <BsWhatsapp size={20} />
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Fale conosco pelo WhatsApp
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/cardialmkt"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Visite nosso Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Siga nossos conteúdos no Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
