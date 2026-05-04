import React from "react";
import "./Locais.css";
import imagem1 from "../../../assets/imagens/imagemLocal1.png";
import imagem2 from "../../../assets/imagens/imagemLocal2.png";
import imagem3 from "../../../assets/imagens/imagemLocal3.png";
import icon1 from "../../../assets/imagens/icon_locais1.png";
import icon2 from "../../../assets/imagens/icon_locais2.png";
import icon3 from "../../../assets/imagens/icon_locais3.png";

export default function Locais() {
  return (
    <section className="container-locais" id="programacao-nextgen">
      <h2>O que vai acontercer no OurBiz NextGen?</h2>

      <div className="locais-grid">
        <div className="locais-card-left">
            <div className="locais-card">
                <img src={imagem1} />
                <div className="locais-card-data">
                    <img src={icon1} />
                    <p>Abertura</p>
                </div>
            </div>

            <div className="locais-card">
                <img src={imagem2} />
                <div className="locais-card-data">
                    <img src={icon2} />
                    <p>Painel de tendências</p>
                </div>
            </div>
        </div>
        <div className="locais-card-right">
            <img src={imagem3} />
            <div className="locais-card-data">
                <img src={icon3} />
                <p>Palestra</p>
            </div>
            <div className="locais-conteudo">
                <p>Tema</p>
                <h3>Modernizando o seu negócio</h3>
            </div>
        </div>
      </div>
    </section>
  );
}
