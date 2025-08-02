import React from "react";
import "./estiloParceiros.css";
import marol from "../../assets/imagens/marollogo.png";
import ada from "../../assets/imagens/adalogo.png";

export default function Parceiros() {
  return (
    <section className="section-parceiros ">
        <h1 className="h1-parceiros">Nossos parceiros</h1>
        <article className="article-parceiros">
            <img src={ ada } alt="Logo" className="imagem-parceiros" />
            <img src={ marol } alt="Logo" className="imagem-parceiros" />
        </article>
    </section>
  );
}
