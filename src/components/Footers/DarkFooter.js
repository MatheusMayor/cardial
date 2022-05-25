/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
         
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()},
           Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Thalis Antunes
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
