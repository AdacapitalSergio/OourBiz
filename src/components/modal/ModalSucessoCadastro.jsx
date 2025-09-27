import React from "react";
import "./ModalSucessoCadastro.css";

export default function ModalSucessoCadastro({ show, onClose, onConfigPerfil, onConfigMaisTarde }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="titulo">Bem-vindo à OurBiz</h2>
        <p>✅ O seu cadastro foi feito com sucesso.</p>
        <p>Configure o seu perfil para completar as informações da sua empresa.</p>

        <div className="botoes">
          <button className="btn-principal" onClick={onConfigPerfil}>Configurar perfil</button><br />
          <button className="btn-secundario" onClick={onConfigMaisTarde}>Configurar mais tarde</button>
        </div>
      </div>
    </div>
  );
}
