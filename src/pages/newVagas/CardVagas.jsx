import React from "react";
import { ListaVagasOurBiz } from "../../data/LiatasVagas";
import { Link } from "react-router-dom";
import "./estiloNewVagas.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import vagaIcon from "../../assets/imagens/vagaIcon.png";
import { Plus } from "lucide-react";

const CardVagas = () => {
  return (
    <>
      <Header />

      <section className="vagas-container">
        <h1 className="vagas-title">As nossas vagas disponíveis</h1>
        <p className="vagas-subtitle">
          Encontre a oportunidade ideal para crescer connosco
        </p>

        <div className="vagas-grid">
          {ListaVagasOurBiz.map((vaga) => (
            <div className="vaga-card" key={vaga.id}>
              <img src={vagaIcon} alt="vaga" className="vaga-icon" />

              <h2 className="vaga-nome">VAGA:{vaga.vaga}</h2>

              {/*<p className="vaga-info">
                <strong>Área:</strong> {vaga.area}
              </p>*/}

              <p className="vaga-info">
                <strong>Local de trabalho:</strong> {vaga.local_trabalho}
              </p>

              <p className="vaga-info">
                <strong>Número de vagas:</strong> {vaga.numero_vagas}
              </p>

              <Link to={`/detalhesvagas/${vaga.id}`} className="vaga-btn">
                <Plus size={16} className="vaga-btn-icon" />
                Ver detalhes
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CardVagas;
