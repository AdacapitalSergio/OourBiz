/*import React from "react";
import "./estiloMissaoVisao.css";
import misaoicon from "../../assets/imagens/missaoicon.png";
import visaoicon from "../../assets/imagens/visaoicon.png";
import valoricon from "../../assets/imagens/valoricon.png";

export default function MissaoVisao() {
  return (
    <section className="section-missao">
        <div className="div-continner-missao">
            <article className="article-missao">
                <img src={ misaoicon } alt="Imagem" className="imagem-missao" />
                <h6 className="h6-missao">Missao</h6>
                <div className="div-line-missao"></div>

                <p className="p-missao1">
                    Oferecer soluções estratégicas e inovadoras que capacitem startups e empresas
                     de pequeno e médio porte a transformar ideias em negócios de sucesso, 
                     impulsionando o crescimento sustentável, a competitividade e a criação 
                     de valor para a sociedade.
                </p>
            </article>
            <article className="article-missao">
                <img src={ visaoicon } alt="Imagem" className="imagem-missao" />
                <h6 className="h6-missao">Visao</h6>
                <div className="div-line-missao"></div>

                <p className="p-missao1">
                    Ser reconhecida como uma referência nacional e internacional em 
                    consultoria empresarial, incubação e desenvolvimento de negócios, 
                    contribuindo para a construção de um ecossistema empreendedor vibrante, 
                    inovador e sustentável.
                </p>
            </article>
            <article className="article-missao">
                <img src={ valoricon } alt="Imagem" className="imagem-missao" />
                <h6 className="h6-missao">Valores</h6>
                <div className="div-line-missao"></div>

                <p className="p-missao1">
                    <span className="span-missao">Inovação:</span> Promover soluções 
                    criativas e adaptáveis que acompanhem as 
                    tendências de mercado. Excelência: Buscar a mais alta qualidade em 
                    nossos serviços e entregas.
                </p>

                <p className="p-missao">
                    <span className="span-missao">Colaboração:</span> Construir parcerias 
                    sólidas com nossos clientes, 
                    colaboradores e stakeholders.
                </p>

                <p className="p-missao">
                    <span className="span-missao">Sustentabilidade:</span> Incentivar práticas 
                    que promovam o impacto econômico, 
                    social e ambiental positivo.
                </p>
                <p className="p-missao">
                    <span className="span-missao">Empreendedorismo:</span> Inspirar e apoiar 
                    indivíduos e empresas a realizar seus 
                    objetivos e superar desafios.
                </p>
                <p className="p-missao">
                    <span className="span-missao">Ética e Transparência:</span> Atuar com integridade, 
                    responsabilidade e respeito 
                    em todas as interações.
                </p>
                <p className="p-missao">
                    <span className="span-missao">Impacto Social:</span> Gerar resultados que 
                    fortaleçam comunidades e contribuam 
                    para o desenvolvimento econômico local e global.
                </p>
            </article>
        </div>
    </section>
  );
}
*/
import React, { useState, useRef, useEffect } from "react";
import "./estiloMissaoVisao.css";
import misaoicon from "../../assets/imagens/missaoicon.png";
import visaoicon from "../../assets/imagens/visaoicon.png";
import valoricon from "../../assets/imagens/valoricon.png";

export default function MissaoVisao() {
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
      icon: misaoicon,
      titulo: "Missão",
      textos: [
        `Oferecer soluções estratégicas e inovadoras que capacitem startups e empresas 
        de pequeno e médio porte a transformar ideias em negócios de sucesso, 
        impulsionando o crescimento sustentável, a competitividade e a criação 
        de valor para a sociedade.`,
      ],
    },
    {
      icon: visaoicon,
      titulo: "Visão",
      textos: [
        `Ser reconhecida como uma referência nacional e internacional em 
        consultoria empresarial, incubação e desenvolvimento de negócios, 
        contribuindo para a construção de um ecossistema empreendedor vibrante, 
        inovador e sustentável.`,
      ],
    },
    {
      icon: valoricon,
      titulo: "Valores",
      textos: [
        `Inovação: Promover soluções criativas e adaptáveis que acompanhem as 
        tendências de mercado. Excelência: Buscar a mais alta qualidade em 
        nossos serviços e entregas.`,
        `Colaboração: Construir parcerias sólidas com nossos clientes, colaboradores e stakeholders.`,
        `Sustentabilidade: Incentivar práticas que promovam o impacto econômico, social e ambiental positivo.`,
        `Empreendedorismo: Inspirar e apoiar indivíduos e empresas a realizar seus objetivos e superar desafios.`,
        `Ética e Transparência: Atuar com integridade, responsabilidade e respeito em todas as interações.`,
        `Impacto Social: Gerar resultados que fortaleçam comunidades e contribuam 
        para o desenvolvimento econômico local e global.`,
      ],
    },
  ];

  return (
    <section className="section-missao">
      <div
        className={`div-continner-missao ${isMobile ? "mobile" : ""}`}
        ref={carouselRef}
        onScroll={isMobile ? handleScroll : undefined}
      >
        {artigos.map((artigo, index) => (
          <article className="article-missao" key={index}>
            <img src={artigo.icon} alt="Imagem" className="imagem-missao" />
            <h6 className="h6-missao">{artigo.titulo}</h6>
            <div className="div-line-missao"></div>

            {artigo.textos.map((texto, i) => (
              <p
                key={i}
                className={i === 0 ? "p-missao1" : "p-missao"}
                dangerouslySetInnerHTML={{
                  __html: texto
                    .replace(/Inovação:/, "<span class='span-missao'>Inovação:</span>")
                    .replace(/Colaboração:/, "<span class='span-missao'>Colaboração:</span>")
                    .replace(/Sustentabilidade:/, "<span class='span-missao'>Sustentabilidade:</span>")
                    .replace(/Empreendedorismo:/, "<span class='span-missao'>Empreendedorismo:</span>")
                    .replace(/Ética e Transparência:/, "<span class='span-missao'>Ética e Transparência:</span>")
                    .replace(/Impacto Social:/, "<span class='span-missao'>Impacto Social:</span>")
                }}
              />
            ))}
          </article>
        ))}
      </div>

      {isMobile && (
        <div className="indicators">
          {artigos.map((_, index) => (
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
