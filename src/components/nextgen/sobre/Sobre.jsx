import React from "react";
import "./Sobre.css";
import imagem from "../../../assets/imagens/Sobre_img.png";

export default function Sobre() {
  return (
    <section className="section-sobre">
      <div className="sobre-content">
        <h1 className="tag-sobre">Sobre</h1>
        <h2>O que é a OurBiz-NextGen?</h2>
        <p>
          O <span style={{ color: '#7c1153', fontWeight: 'bold' }}>OurBiz-NextGen</span> é 
          um evento inovador voltado para estudantes universitários intressados em 
          empreendedorismo e modernização dos negócios.
        </p>
        <p>
            Nossa missão é inspirar e capacitar a próxima geração de 
            empreendedores com ferramentas práticas, networking e 
            conhecimento atualizado para transformar ideias em negócios de sucesso.
        </p>
      </div>

      <img src={imagem} className="sobre-img" />
    </section>
  );
}
