import React, { useState } from "react";
import "./estiloEncontreServico.css";
import iconV from "../../assets/imagens/iconverde.png";
import setaL from "../../assets/imagens/setaVoltar.png";
import setaR from "../../assets/imagens/setaDt.png";
import { servicoDetalhes } from "../../data/servicoDetalhes.js";
import { Link } from "react-router-dom";

export default function EncontreMelhorServico() {
  const [servicoSelecionado, setServicoSelecionado] = useState(servicoDetalhes[0]);

  const currentIndex = servicoDetalhes.findIndex(
    (s) => s.id === servicoSelecionado.id
  );

  const handlePrev = () => {
    if (currentIndex > 0) {
      setServicoSelecionado(servicoDetalhes[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < servicoDetalhes.length - 1) {
      setServicoSelecionado(servicoDetalhes[currentIndex + 1]);
    }
  };

  return (
    <main className="main-encontre-servico">
      <h1 className="h1-encontre-servico">
        Encontre a melhor consultoria para o seu negócio.
      </h1>

      <section className="section-encontre-servico">
        {servicoDetalhes.map((item) => (
          <article
            key={item.id}
            className={`article-encontre-servico ${
              servicoSelecionado?.id === item.id ? "bgc-branco" : ""
            }`}
            onClick={() => setServicoSelecionado(item)}
          >
            <h3 className="h3-encontre-servico">
              <img src={item.icon} className="icon-detalhes" /> {item.titulo}
            </h3>
          </article>
        ))}
        <article className="articleso-encontre-servico">
          <h3 className="h3-encontre-servico">Consulte os nossos planos</h3>
        </article>
      </section>

      {servicoSelecionado && (
        <section className="detalhes-servico">
          <div className="linha"></div>
          <h3 className="h32-encontre-servico">
            {servicoSelecionado.titulo}
          </h3>
          <img
            src={servicoSelecionado.imagem}
            alt="Imagem"
            className="detalhes-servico-imagem"
          />
          <div className="cards-sub-container animate-slide">
            <div className="card-sub">
              <h2>{servicoSelecionado.subt1}</h2>
              <p>{servicoSelecionado.dessc1}</p>
              <h4>{servicoSelecionado.beneficios1}</h4>
              <ul>
                {servicoSelecionado.beneficios1li?.map((beneficio, idx) => (
                  <li key={idx}>
                    <img src={iconV} /> {beneficio}
                  </li>
                ))}
              </ul>
            </div>

            {servicoSelecionado.sub2 && (
              <div className="card-sub">
                <h2>{servicoSelecionado.sub2}</h2>
                <p>{servicoSelecionado.dessc2}</p>
                <h4>{servicoSelecionado.beneficios2}</h4>
                <ul>
                  {servicoSelecionado.beneficios2li?.map((beneficio, idx) => (
                    <li key={idx}>
                      <img src={iconV} /> {beneficio}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {servicoSelecionado.sub3 && (
              <div className="card-sub">
                <h2>{servicoSelecionado.sub3}</h2>
                <p>{servicoSelecionado.dessc3}</p>
                <h4>{servicoSelecionado.beneficios3}</h4>
                <ul>
                  {servicoSelecionado.beneficios3li?.map((beneficio, idx) => (
                    <li key={idx}>
                      <img src={iconV} /> {beneficio}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="divso-encontreservico">
            <Link className="link-encontreservico" to={"/planos"}>
              <button className="button2-encontreservico">
                {servicoSelecionado.textBotao1}
              </button>
            </Link>
            <Link className="link-encontreservico" to={"/contactar"}>
              <button className="button2-encontreservico">
                {servicoSelecionado.textBotao2}
              </button>
            </Link>
          </div>
          <div className="linha"></div>

          <div className="div-links">
            {currentIndex > 0 && (
              <button
                onClick={handlePrev}
                className="link-links"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <img src={setaL} alt="" className="link-img" />
                {servicoDetalhes[currentIndex - 1].titulo}
              </button>
            )}

            {currentIndex < servicoDetalhes.length - 1 && (
              <button
                onClick={handleNext}
                className="link-links"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {servicoDetalhes[currentIndex + 1].titulo}
                <img src={setaR} alt="" className="link-img" />
              </button>
            )}
          </div>
        </section>
      )}
    </main>
  );
}

