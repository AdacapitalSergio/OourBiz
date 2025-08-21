import React, { useState, useEffect, useRef } from "react";
import "./estiloNossosProfissionais.css";
import ceo from "../../assets/imagens/ceo.png";
import david from "../../assets/imagens/david.png";
import sonia from "../../assets/imagens/sonia2.jpeg";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function NossosProfissionais() {
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

  const profissionais = [
    {
      imagem: ceo,
      nome: "Sérgio Lélis",
      cargo: "CEO",
      descricao: `Formado em Gestão de Empresas pela Universidade Agostinho Neto e docente da 
        Faculdade de Economia da Universidade Mandume Ya Ndemufayo, Sérgio Lélis lidera a 
        Ourbiz com uma combinação de visão estratégica e sólida formação acadêmica. Atua 
        no fortalecimento de micro, pequenas e médias empresas, promovendo soluções 
        inovadoras em consultoria, capacitação e apoio ao empreendedorismo em Angola.`,
    },
    {
      imagem: sonia,
      nome: "Sónia Adelaide",
      cargo: "Assistente Administrativa",
      descricao: `Formada em Informática e Gestão pelo Instituto Superior Politécnico Independente (ISPI), 
        Sónia Adelaide integra a equipa da OurBiz desde março de 2025. Atua no 
        suporte às operações administrativas, organização de processos internos 
        e apoio direto às atividades de consultoria e formação.`,
    },
    {
      imagem: david,
      nome: "Gil Ivens",
      cargo: "Engenheiro de Sistemas Informáticos",
      descricao: `Formado em Engenharia Informática pelo Instituto Superior Politécnico 
        Independente (ISPI), Gil Ivens integra a OurBiz desde março de 2025. Atua no desenvolvimento e 
        manutenção de plataformas digitais da empresa, com foco em segurança da 
        informação, automação de processos empresariais e integração de sistemas.`,
      margem: "margem"
    },
  ];

  return (
    <section className="section-nossosp">
      <h3 className="h3-nossosp">Nossos profissionais</h3>

      <div
        className={`div-continner-nossos ${isMobile ? "mobile" : ""}`}
        ref={carouselRef}
        onScroll={isMobile ? handleScroll : undefined}
      >
        {profissionais.map((prof, index) => (
          <article className={`article-nossosp ${prof.margem}`} key={index}>
            <img src={prof.imagem} alt={prof.nome} className="imagem-nossosp" />
            <h4 className="h4-nossosp">
              {prof.nome}
              <br />
              {prof.cargo}
            </h4>
            <p className="p-nossosp">{prof.descricao}</p>
            <ul className="ul-icon-nossosp">
              {[FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTiktok, BsTwitterX].map(
                (Icon, i) => (
                  <li key={i}>
                    <a href="/#" target="_blank" rel="noopener noreferrer">
                      <Icon />
                    </a>
                  </li>
                )
              )}
            </ul>
          </article>
        ))}
      </div>

      {isMobile && (
        <div className="indicators">
          {profissionais.map((_, index) => (
            <span
              key={index}
              className={`indicator-dot ${index === activeIndex ? "active" : ""}`}
            ></span>
          ))}
        </div>
      )}
    </section>
  );
}
