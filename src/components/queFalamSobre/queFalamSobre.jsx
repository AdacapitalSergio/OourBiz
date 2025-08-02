import React, { useState, useEffect, useRef } from "react";
import "./estiloQueFalamSobre.css";
import ceo from "../../assets/imagens/ceo.png";
import david from "../../assets/imagens/david.png";
import sonia from "../../assets/imagens/sonia.png";

export default function QueFalamSobre() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 670);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

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
    {
      img: ceo,
      titulo: "Sérgio Lélis\nCEO",
      texto: `Formado em Gestão de Empresas pela Universidade Agostinho Neto e docente 
      da Faculdade de Economia da Universidade Mandume Ya Ndemufayo, Sérgio 
      Lélis lidera a Ourbiz com uma combinação de visão estratégica e sólida 
      formação acadêmica. Atua no fortalecimento de micro, pequenas e médias 
      empresas, promovendo soluções inovadoras em consultoria, capacitação e 
      apoio ao empreendedorismo em Angola.`,
    },
    {
      img: sonia,
      titulo: "Sónia Adelaide\nAssistente Administrativa",
      texto: `Formada em Informática e Gestão pelo Instituto Superior Politécnico Independente 
      (ISPI), Sónia Adelaide integra a equipa da OurBiz desde março de 2025. Atua no suporte 
      às operações administrativas, organização de processos internos e apoio direto 
      às atividades de consultoria e formação.`,
    },
    {
      img: david,
      titulo: "Gil Ivens\nEngenheiro de Sistemas Informáticos",
      texto: `Licenciado em Engenharia Informática pelo Instituto Superior Politécnico 
      Independente (ISPI), Gil Ivens integra a OurBiz desde março de 2025. Atua no 
      desenvolvimento e manutenção de plataformas digitais da empresa, com foco em segurança da informação, 
      automação de processos empresariais e integração de sistemas.`,
      margem: 'margem',
    },
  ];

  return (
    <section className="section-quefala">
      <div className="div-curva-quefala">
        <h3 className="h3-quefala">O que falam sobre nós</h3>
      </div>

      <div
        className={`div-continner-quefala ${isMobile ? "mobile" : ""}`}
        ref={carouselRef}
        onScroll={isMobile ? handleScroll : undefined}
      >
        {artigos.map((item, index) => (
          <article className={`article-quefala ${item.margem}`} key={index}>
            <img src={item.img} alt="Imagem" className="imagem-quefala" />
            <h4 className="h4-quefala">
              {item.titulo.split("\n")[0]}
              <br />
              {item.titulo.split("\n")[1]}
            </h4>
            <p className="p-quefala">{item.texto}</p>
          </article>
        ))}
      </div>

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
    </section>
  );
}
