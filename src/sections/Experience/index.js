import React from "react";
import "./styles.css";

export default function index() {
  return (
    <div className="section-experience" id="experiencia">
      <div className="title-div">
        <h1>Preencha e ganhe uma avaliação grátis da sua ideia</h1>
      </div>

      <form>
        <fieldset className="reward-form">
          <div className="reward-form-items">
            <label for='nome' className="reward-items">Nome</label>
            <input type='text' name='nome' id='nome'></input>
          </div>
          <div className="reward-form-items">
            <label for='email' className="reward-items">E-mail</label>
            <input type='email' name='email' id='email'></input>
          </div>
          <div className="reward-form-items">
            <label for='telefone 'className="reward-items">Telefone</label>
            <input type='tel' name='telefone' id='telefone'></input>
          </div>
          <button className="send-button">Enviar</button>
        </fieldset>
      </form>
    </div>
  );
}
