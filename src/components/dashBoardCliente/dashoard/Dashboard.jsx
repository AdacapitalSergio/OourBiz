import React from "react";
import Notificacoes from "./Notificacoes";
import Servicos from "./Servicos";
import MinhasInformacoes from "./MinhasInformacoes";
import "./estiloDashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="col-esquerda">
        <Notificacoes />
        <MinhasInformacoes />
      </div>

      <div className="col-direita">
        <Servicos />
      </div>
    </div>
  );
}
