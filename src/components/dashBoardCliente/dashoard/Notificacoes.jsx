import React from "react";
import { FaBell } from "react-icons/fa";

export default function Notificacoes() {
  return (
    <div className="notificacoes card">
      <h3>Notificações</h3>
      <p className="contador">0 notificações</p>
      <div className="icone-sino">
        <FaBell />
      </div>
      <p>Sem notificação</p>
    </div>
  );
}
