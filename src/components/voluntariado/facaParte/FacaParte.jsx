import React from "react";
import "./FacaParte.css";
import imagem from "../../../assets/imagens/ImagemFacaParte.png";

export default function FacaParte() {
  return (
    <section className="section-sobre">
      <div className="sobre-content">
        <h2>Faça parte da nossa equipe</h2>
        <p>
            A OurBiz mantem o seu comprimisso em auxiliar no desenvolvimento pessoal 
            e acadêmico de jovens com potencias para contribuir no crescimento do 
            ambiente de negócios angolano oferecendo oportunidades e apoio.
        </p>
      </div>

      <img src={imagem} className="sobre-img" />
    </section>
  );
}
