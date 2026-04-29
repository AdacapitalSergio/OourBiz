import React from "react";
import "./Programacao.css";
import { programacao_nextgen } from "../../../data/mentoresData";

export default function Programacao() {
  return (
    <section className="container-programacao">
      <h2>Porquê participar do OurBiz-NextGen?</h2>
      <div className="container-cards-programacao">
        {programacao_nextgen.map((item, index) => (
            <div key={index} className="card-programacao">
            <img src={item.icon} alt={`Programação ${index + 1}`} />
            <h3>{item.titulo}</h3>
            <div className="linha-programacao"></div>
            <p>{item.Descricao}</p>
            </div>
        ))}
      </div>
    </section>
  );
}
