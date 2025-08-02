/*import React from 'react';
import './estiloArtigosRecentes.css';

const artigos = [
  {
    titulo: "Impacto das IA nas empresas.",
    imagem: "../../assets/imagens/bebe.png",
    link: "#"
  },
  {
    titulo: "O potencial da inovação em África.",
    imagem: "/assets/africa.jpg",
    link: "#"
  },
  {
    titulo: "A sustentabilidade e as empresas.",
    imagem: "/assets/sustentabilidade.jpg",
    link: "#"
  }
];

const ArtigosRecentes = () => {
  return (
    <section className="artigos-container">
        <div className='div-cont-curva'>
          <h2 className="titulo-secao">Artigos recentes</h2>
            <div className="artigos-lista">
                {artigos.map((artigo, index) => (
                <div
                    key={index}
                    className="artigo-card"
                    style={{ backgroundImage: `url(${artigo.imagem})` }}
                >
                    <a href={artigo.link} className="botao-ler">Ler</a>
                    <div className="overlay-titulo">
                    <p>{artigo.titulo}</p>
                    </div>
                </div>
                ))}
            </div>

            <div className="barra-indicador">
                <div className="barra-preenchida"></div>
                <div className="barra-restante"></div>
            </div>

            <h2 className="titulo-secao">Eventos</h2>
            <div className="artigos-lista">
                {artigos.map((artigo, index) => (
                <div
                    key={index}
                    className="artigo-card"
                    style={{ backgroundImage: `url(${artigo.imagem})` }}
                >
                    <a href={artigo.link} className="botao-ler">Ler</a>
                    <div className="overlay-titulo">
                    <p>{artigo.titulo}</p>
                    </div>
                </div>
                ))}
            </div>

            <div className="barra-indicador">
                <div className="barra-preenchida"></div>
                <div className="barra-restante"></div>
            </div>
        </div>
    </section>
  );
};

export default ArtigosRecentes;
*/
import React, { useState, useEffect, useRef } from 'react';
import './estiloArtigosRecentes.css';

const artigos = [
  {
    titulo: "Impacto das IA nas empresas.",
    imagem: "../../assets/imagens/bebe.png",
    link: "#"
  },
  {
    titulo: "O potencial da inovação em África.",
    imagem: "/assets/africa.jpg",
    link: "#"
  },
  {
    titulo: "A sustentabilidade e as empresas.",
    imagem: "/assets/sustentabilidade.jpg",
    link: "#"
  }
];

const ArtigosRecentes = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 670);
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);

  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 670);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (ref, setActiveIndex) => {
    if (!ref.current) return;
    const { scrollLeft, clientWidth } = ref.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(index);
  };

  const renderCarousel = (ref, setActiveIndex, activeIndex) => (
    <>
      <div
        className={`artigos-lista ${isMobile ? 'mobile' : ''}`}
        ref={ref}
        onScroll={
          isMobile ? () => handleScroll(ref, setActiveIndex) : undefined
        }
      >
        {artigos.map((artigo, index) => (
          <div
            key={index}
            className="artigo-card"
            style={{ backgroundImage: `url(${artigo.imagem})` }}
          >
            <a href={artigo.link} className="botao-ler">Ler</a>
            <div className="overlay-titulo">
              <p>{artigo.titulo}</p>
            </div>
          </div>
        ))}
      </div>

      {isMobile && (
        <div className="indicators">
          {artigos.map((_, index) => (
            <span
              key={index}
              className={`indicator-dot ${
                index === activeIndex ? 'active' : ''
              }`}
            ></span>
          ))}
        </div>
      )}
    </>
  );

  return (
    <section className="artigos-container">
      <div className="div-cont-curva">
        <h2 className="titulo-secao">Artigos recentes</h2>
        {renderCarousel(carouselRef1, setActiveIndex1, activeIndex1)}

        <div className="barra-indicador">
          <div className="barra-preenchida"></div>
          <div className="barra-restante"></div>
        </div>

        <h2 className="titulo-secao">Eventos</h2>
        {renderCarousel(carouselRef2, setActiveIndex2, activeIndex2)}

        <div className="barra-indicador">
          <div className="barra-preenchida"></div>
          <div className="barra-restante"></div>
        </div>
      </div>
    </section>
  );
};

export default ArtigosRecentes;
