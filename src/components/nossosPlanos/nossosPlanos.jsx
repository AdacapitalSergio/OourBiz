import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./estiloNossosPlanos.css";
import iconV from "../../assets/imagens/iconverde.png";
import { nossosPlanos } from "../../data/nossosPlanosData.js";
import ModalDecisor from "../modal/ModalDecisor";

export default function NossosPlanos() {
  const { servicoId } = useParams();
  const [servicoSelecionado, setServicoSelecionado] = useState(nossosPlanos[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const [planoSelecionado, setPlanoSelecionado] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (servicoId) {
      const servico = nossosPlanos.find((s) => s.id === parseInt(servicoId));
      if (servico) {
        setServicoSelecionado(servico);
      }
    }
  }, [servicoId]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 670);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(index);
  };

  const planos = [];
  if (servicoSelecionado.nomePlano)
    planos.push({
      nome: servicoSelecionado.nomePlano,
      beneficios: servicoSelecionado.beneficiosli,
      observacao: servicoSelecionado.observacao,
      preco: servicoSelecionado.preco,
    });
  if (servicoSelecionado.nomePlano2)
    planos.push({
      nome: servicoSelecionado.nomePlano2,
      beneficios: servicoSelecionado.beneficiosli2,
      observacao: servicoSelecionado.observacao2,
      preco: servicoSelecionado.preco2,
    });
  if (servicoSelecionado.nomePlano3)
    planos.push({
      nome: servicoSelecionado.nomePlano3,
      beneficios: servicoSelecionado.beneficiosli3,
      observacao: servicoSelecionado.observacao3,
      preco: servicoSelecionado.preco3,
    });
  if (servicoSelecionado.nomePlano4)
    planos.push({
      nome: servicoSelecionado.nomePlano4,
      beneficios: servicoSelecionado.beneficiosli4,
      observacao: servicoSelecionado.observacao4,
      preco: servicoSelecionado.preco4,
    });

  return (
    <main className="main-nossosplanos">
      <h1 className="h1-nossosplanos">Nossos planos</h1>

      <section className="section-nossosplanos">
        {nossosPlanos.map((item) => (
          <article
            key={item.id}
            className={`article-nossosplanos ${
              servicoSelecionado?.id === item.id ? "bgc-branco-nossosplanos" : ""
            }`}
            onClick={() => {
              setServicoSelecionado(item);
              setActiveIndex(0);
              if (carouselRef.current) {
                carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
              }
            }}
          >
            <h3 className="h3-nossosplanos">
              <div className="div-pontinho"></div>
              <p>{item.titulo}</p>
            </h3>
          </article>
        ))}
      </section>

      {servicoSelecionado && (
        <section
          className="detalhes-nossosplanos"
          style={{ backgroundImage: `url(${servicoSelecionado.imagem})` }}
        >
          <div className="overlay-nossosplanos">
            <h3 className="h32-nossosplanos">{servicoSelecionado.titulo}</h3>

            <div
              className={`cards-sub-nossosplanos ${isMobile ? "mobile" : ""}`}
              ref={carouselRef}
              onScroll={isMobile ? handleScroll : undefined}
            >
              {planos.map((plano, index) => (
                <div className="card-nossosplanos" key={index}>
                  <h2>{plano.nome}</h2>
                  <div className="div-linha-nossosplanos"></div>
                  <ul>
                    {plano.beneficios?.map((beneficio, idx) => (
                      <li key={idx}>
                        <img src={iconV} alt="" /> {beneficio}
                      </li>
                    ))}
                  </ul>
                  <div className="div-linha-nossosplanos"></div>
                  <p>{plano.observacao}</p>
                  <div className="div-linha-nossosplanos"></div>
                  <p className="p-preco">{plano.preco}</p>
                  <div className="divso-nossosplanos">
                    <button
                      onClick={() => {
                        setPlanoSelecionado(plano);
                        setIsModalOpen(true);
                      }}
                      className="button2-nossosplanos"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {isMobile && (
              <div className="indicators">
                {planos.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator-dot ${
                      index === activeIndex ? "active" : ""
                    }`}
                  ></span>
                ))}
              </div>
            )}
          </div>
        </section>
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
