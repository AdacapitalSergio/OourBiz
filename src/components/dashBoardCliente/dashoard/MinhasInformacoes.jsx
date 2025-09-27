import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function MinhasInformacoes() {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  const renderHeader = (title, section) => (
    <div className="accordion-header" onClick={() => toggle(section)}>
      <span>{title}</span>
      {open === section ? <FaChevronUp /> : <FaChevronDown />}
    </div>
  );

  return (
    <div className="minhas-infos">
      <h3>Minhas informações</h3>

      <div className="accordion-item">
        {renderHeader("Dados pessoais", "pessoal")}
        {open === "pessoal" && (
          <div className="accordion-body">
            <p>Mock de dados pessoais...</p>
          </div>
        )}
      </div>

      <div className="accordion-item">
        {renderHeader("Dados empresarial", "empresarial")}
        {open === "empresarial" && (
          <div className="accordion-body">
            <p>Mock de dados empresariais...</p>
          </div>
        )}
      </div>

      <div className="accordion-item">
        {renderHeader("Definições de conta", "conta")}
        {open === "conta" && (
          <div className="accordion-body">
            <p>Mock de definições de conta...</p>
          </div>
        )}
      </div>
    </div>
  );
}
