import React from "react";
import { List, Item } from "react-step-component";
import "./styles.css";
import Roll from "react-reveal/Roll";

export default function index() {
  return (
    <div className="section-experience" id="experiencia">
      <div className="title-div">
        <h1>Experiência</h1>
        <div className="blue">.</div>
      </div>

      <div className="steps-experience">
        <List>
          <Item.Wrapper active={true}>
            <Item.Left className="wraper">
              <Roll left>
                <div className="modal">
                  <span>Ingresso a UNIPAMPA (Março - 2019)</span>
                </div>
              </Roll>
            </Item.Left>
            <Item.Center />
            <Item.Right></Item.Right>
          </Item.Wrapper>

          <Item.Wrapper active={true}>
            <Item.Left></Item.Left>
            <Item.Center />
            <Item.Right>
              <Roll right>
                <div className="modal">
                  <span>
                    Desenvolvedor Full-Stack - ZallPy Digital (Janeiro - 2021)
                  </span>
                </div>
              </Roll>
            </Item.Right>
          </Item.Wrapper>

          <Item.Wrapper active={true}>
            <Item.Left>
              <Roll left>
                <div className="modal">
                  <span>
                    Desenvolvedor React JS - Pedimos (Agosto/Dezembro - 2021)
                  </span>
                </div>
              </Roll>
            </Item.Left>
            <Item.Center />
            <Item.Right></Item.Right>
          </Item.Wrapper>

          <Item.Wrapper active={true}>
            <Item.Left></Item.Left>
            <Item.Center />
            <Item.Right>
              <Roll right>
                <div className="modal">
                  <span>
                    Product Owner - Zallpy Digital (Outubro -2021/Janeiro -
                    2023)
                  </span>
                </div>
              </Roll>
            </Item.Right>
          </Item.Wrapper>

          <Item.Wrapper active={true}>
            <Item.Left>
              <Roll left>
                <div className="modal">
                  <span>
                    QA Júnior - Bolsa MEC (Ministério Educação e Cultura)
                    (Janeiro/Atual - 2023)
                  </span>
                </div>
              </Roll>
            </Item.Left>
            <Item.Center />
            <Item.Right></Item.Right>
          </Item.Wrapper>
        </List>
      </div>
    </div>
  );
}
