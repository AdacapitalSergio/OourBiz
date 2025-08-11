import React from "react";
import "./estiloParceiros.css";
import marol from "../../assets/imagens/marollogo.png";
import ada from "../../assets/imagens/adalogo.png";
import ongfa from "../../assets/imagens/ongfa.png";
import { Link } from "react-router-dom";

export default function Parceiros() {
  return (
    <section className="section-parceiros ">
        <h1 className="h1-parceiros">Nossos parceiros</h1>
        <article className="article-parceiros">
          <a href="https://adacapital.ao/" target="_blank" rel="noopener noreferrer">
            <img src={ ada } alt="Logo" className="imagem-parceiros" />

          </a>
          <a href="https://www.maroldep.ao/" target="_blank" rel="noopener noreferrer">
            <img src={ marol } alt="Logo" className="imagem-parceiros" />
          </a>
          <a href="/#" target="_blank" rel="noopener noreferrer">
            <img src={ ongfa } alt="Logo" className="imagem2-parceiros" />
          </a>
        </article>
    </section>
  );
}
