//No componente de serviços (ex: ServicoCard.jsx)
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Modal from "../modal/Modal";

export default function ServicoCard({ servico }) {
  const { user } = useContext(AuthContext);
  const [modal, setModal] = useState({ open: false, message: "" });

  const handleCompra = () => {
    if (user) {
      // 🔥 Usuário logado → prosseguir com compra
      console.log("Comprar serviço:", servico);
      setModal({ open: true, message: "Serviço comprado com sucesso!" });
    } else {
      // ⚠️ Usuário não logado → pedir login
      setModal({ open: true, message: "Você precisa fazer login para continuar." });
    }
  };

  return (
    <div className="servico-card">
      <h3>{servico.nome}</h3>
      <p>{servico.descricao}</p>
      <button onClick={handleCompra} className="btn-comprar">Comprar</button>

      {/* Modal */}
      {modal.open && (
        <Modal
          message={modal.message}
          onClose={() => setModal({ ...modal, open: false })}
          type={user ? "success" : "error"}
        />
      )}
    </div>
  );
}
