import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ListaVagasOurBiz } from "../../data/LiatasVagas";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowLeft, Briefcase } from "lucide-react";
import { toast } from "sonner";
import "./estiloNewVagas.css";
import ModalCandidatura from "./ModalCandidatura";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const DetalhesVaga = () => {
  const { vagaId } = useParams();
  const vaga = ListaVagasOurBiz.find((v) => v.id === parseInt(vagaId));

  const [openModal, setOpenModal] = useState(false);

  if (!vaga) return <p>Vaga não encontrada</p>;

  return (
    <>
      <Header />
      <div className="vaga-container">
        <Link to="/vagas" className="back-btn">
          <ArrowLeft size={18} />
          Voltar para vagas
        </Link>

        <div className="vaga-header">
          <h1>{vaga.vaga}</h1>
          <p className="empresa">{vaga.empresa}</p>

          <div className="vaga-info">
            <span><Briefcase size={12} style={{ backgroundColor: "rgba(131, 17, 112, 0.3)", color: "#ca1183", width: "16px", height: "16px", borderRadius: "50%" }} /> {vaga.area || "OurBiz"}</span>
            <span><MapPin size={10} style={{ backgroundColor: "rgba(131, 17, 112, 0.3)", color: "#ca1183", width: "16px", height: "16px", borderRadius: "50%" }} />{ vaga.local_trabalho }</span>
          </div>

          <button className="btn-primary" onClick={() => setOpenModal(true)}>
            Candidatar-se
          </button>
        </div>

        <div className="vaga-content">
          <Section title="Junte-se a nós">
            <p>{vaga.junte_nos}</p>
          </Section>

          <Section title="Missão">
            <p>{vaga.missao}</p>
          </Section>

          <Section title="Requisitos" list={vaga.requisitos} />
          <Section title="Actividades" list={vaga.actividades} />
          <Section title="Perfil" list={vaga.perfil} />
          <Section title="Benefícios" list={vaga.beneficios} />

          {vaga.etapas && (
            <Section title="Etapas do Processo" list={vaga.etapas} />
          )}

          {vaga.documentos && (
            <Section title="Documentos" list={vaga.documentos} />
          )}

          {vaga.cultura && (
            <>
              <Section title="Nossa Cultura">
                <p>{vaga.cultura.descricao}</p>
              </Section>

              <Section title="Acreditamos" list={vaga.cultura.acreditamos} />
              <Section title="Valorizamos" list={vaga.cultura.valorizamos} />

              <p className="cultura-final">{vaga.cultura.final}</p>
            </>
          )}
        </div>

        <button className="btn-primary" onClick={() => setOpenModal(true)}>
          Candidatar-se agora
        </button>

        {/* MODAL */}
        <ModalCandidatura
          open={openModal}
          onClose={() => setOpenModal(false)}
          vaga={vaga}
        />
      </div>
      <Footer />
    </>
  );
};

const Section = ({ title, list, children }) => (
  <section className="vaga-section">
    <h3>{title}</h3>
    {list ? (
      <ul>
        {list.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    ) : children}
  </section>
);

export default DetalhesVaga;
