/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import "../../assets/css/indexHeader.css";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="red">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/header.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/cardial-sft-branco.svg").default}
            ></img>
            <h1 className="h1-seo">CARDIAL I.T</h1>
            <h3 className="subtile">Somos uma empresa de desenvolvimento de software, focada em soluções de prontidão e eficazes. </h3>
          </div>
        
           
          
          
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
