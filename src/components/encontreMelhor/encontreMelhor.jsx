import React, { useState, useEffect, useRef } from "react";
import { econtreArticles } from "../../data/articlesEncontre";
import "./estiloEncontre.css";
import { Link, useNavigate } from "react-router-dom";

import ModalDecisor from "../modal/ModalDecisor";

export default function EncontreMelhor() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 670);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const [planoSelecionado, setPlanoSelecionado] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState(econtreArticles[0]);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 670);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(index);
  };

  const artigos = [
    ...econtreArticles,
    {
      isExtra: true,
      titulo: "Que tal pensarmos em grande, juntos?",
    },
  ];

  const irParaServico = (servico) => {
    navigate("/servicos", { state: { servico } });
  };

  return (
    <main className="main-encontre">
      <h1 className="h1-encontre">
        Encontre a melhor consultoria para o seu negócio.
      </h1>

      <section
        className={`section-encontre ${isMobile ? "mobile" : ""}`}
        ref={carouselRef}
        onScroll={isMobile ? handleScroll : undefined}
      >
        {artigos.map((item, index) =>
          item.isExtra ? (
            <article className="articleso-encontre" key={index}>
              <h3 className="h3so-encontre">
                Que tal pensarmos em grande, juntos?
              </h3>
              <div className="divso-encontre">
                <button
                  onClick={() => {
                    setPlanoSelecionado(item);
                    setIsModalOpen(true);
                  }}
                  className="button2-encontre"
                >
                  Comprar agora
                </button>
                <Link className="link-encontreservico" to={`/servicos`}>
                  <button className="button2-encontre">
                    {servicoSelecionado.textBotao2}
                  </button>
                </Link>

              </div>
            </article>
          ) : (
            <article className="article-encontre" key={index}>
              <img src={item.icon} alt="" className="icon-encontre" />
              <h3 className="h3-encontre">{item.titulo}</h3>
              <ul className="ul-encontre">
                <li className="li-encontre">{item.li1}</li>
                <li className="li-encontre">{item.li2}</li>
                <li className="li-encontre">{item.li3}</li>
                <li className="li-encontre">{item.li4}</li>
              </ul>
              <div className="div-encontre">
                <button
                  onClick={() => {
                    setPlanoSelecionado(item);
                    setIsModalOpen(true);
                  }}
                  className="button1-encontre"
                >
                  {item.textBotao1}
                </button>

                <Link className="link-encontreservico" to={`/servicos/${item.id}`}>
                  <button className="button2-encontre">
                    {item.textBotao2}
                  </button>
                </Link>
              </div>
            </article>
          )
        )}
      </section>

      {isMobile && (
        <div className="indicators">
          {artigos.map((_, index) => (
            <span
              key={index}
              className={`indicator-dot ${
                index === activeIndex ? "active" : ""
              }`}
            ></span>
          ))}
        </div>
      )}
      <ModalDecisor
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setPlanoSelecionado(null);
        }}
        planoSelecionado={planoSelecionado}
      />
    </main>
  );
}
