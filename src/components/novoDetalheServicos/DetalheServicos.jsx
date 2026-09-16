import React, { useState, useEffect } from "react";
import "./DetalheServicos.css";
import iconV from "../../assets/imagens/iconverde.png";
import setaL from "../../assets/imagens/setaVoltar.png";
import setaR from "../../assets/imagens/setaDt.png";
import { servicoDetalhes, novos_servicos } from "../../data/servicoDetalhes.js";
import { Link, useParams } from "react-router-dom";
import ContactModal from "../contactoModal/ContactModal.jsx";

import ModalSolicitarServico from "../ModalSolicitarServico/ModalSolicitarServico";
import { Toaster } from "sonner";
import { CheckCircle2 } from "lucide-react";

export default function DetalheServicos() {
  const [servicoSelecionado, setServicoSelecionado] = useState(novos_servicos[0]);
  const [openModal, setOpenModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  
  const { servicoId } = useParams();

  useEffect(() => {
    if (servicoId) {
      const servico = novos_servicos.find((s) => s.id === parseInt(servicoId));
      if (servico) {
        setServicoSelecionado(servico);
      }
    }
  }, [servicoId]);


  const currentIndex = novos_servicos.findIndex(
    (s) => s.id === servicoSelecionado.id
  );

  const handlePrev = () => {
    if (currentIndex > 0) {
      setServicoSelecionado(novos_servicos[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < novos_servicos.length - 1) {
      setServicoSelecionado(novos_servicos[currentIndex + 1]);
    }
  };

  return (
    <main className="main-encontre-servico">
      <Toaster richColors position="top-right" />
      <h1 className="h1-encontre-servico">
        Encontre a melhor consultoria para o seu negócio.
      </h1>

      <section className="section-encontre-servico">
        {novos_servicos.map((item) => (
          <article
            key={item.id}
            className={`article-encontre-servico ${
              servicoSelecionado?.id === item.id ? "bgc-branco" : ""
            }`}
            onClick={() => setServicoSelecionado(item)}
          >
            <h3 className="h3-encontre-servico">
              <img src={item.icon} className="icon-detalhes" alt="" /> {item.titulo}
            </h3>
          </article>
        ))}
      </section>

      {servicoSelecionado && (
        <section className="detalhes-servico">
          <div  style={{ backgroundImage: `url(${servicoSelecionado.imagem})` }} className="div-titulo-detalhes">
            <h1 className="h1-titulo-detalhes">{servicoSelecionado.titulo}</h1>
            <ul className="ul-detalhes">
              {servicoSelecionado.pontos.map((ponto, index) => (
                <li key={index} className="li-detalhes">
                  {ponto}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            {servicoSelecionado.sub_servicos.map((detalhe, index) => (
              <div key={index} className="detalhe-item-sub-servico">
                <div className="div-detalhes">
                  <h2 className="h2-detalhes">{detalhe.sub_titulo}</h2>
                  <p className="p-detalhes">{detalhe.descricoes}</p>
                  <h4 className="h4-detalhes">Benefícios</h4>
                  <ul className="ul-beneficios-detalhes">
                    {detalhe.beneficios.map((beneficio, index) => (
                      <li key={index}> <CheckCircle2 size={16} className="icon-beneficios-detalhes" /> {beneficio}</li>
                    ))}
                  </ul>
                  <article className="article-detalhes">
                    <div>
                      <span>{detalhe.apartir}</span>
                      <p>{detalhe.preco[0]} <sub>{detalhe.preco[1]}</sub></p>
                    </div>
                    <div>
                      <p>{detalhe.valor_final}</p>
                      <ul>
                        {detalhe.fatores.map((fator, index) => (
                          <li key={index}>{fator}</li>
                        ))}
                      </ul>
                      <p>{detalhe.pagamento_inicial}</p>
                    </div>
                  </article>
                </div>
                <div>
                  <img src={detalhe.imagem_sub_servico} alt="Imagem do Sub-serviço" />
                </div>
              </div>
            ))}
          </div>
         
          <div className="div-links">
            {currentIndex > 0 && (
              <button
                onClick={handlePrev}
                className="link-links"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <img src={setaL} alt="" className="link-img" />
                {novos_servicos[currentIndex - 1].titulo}
              </button>
            )}

            {currentIndex < novos_servicos.length - 1 && (
              <button
                onClick={handleNext}
                className="link-links"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {novos_servicos[currentIndex + 1].titulo}
                <img src={setaR} alt="" className="link-img" />
              </button>
            )}
          </div>
        </section>
      )}
      <ModalSolicitarServico
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
}
