import React from "react";
import servicos from "../../../data/servicos";
import { FaUpload } from "react-icons/fa6";

export default function Servicos() {
  return (
    <div className="servicos card"> 
      <h3 style={{ textAlign: "left", fontSize: "18px" }}>Meus serviços</h3>
      <p className="descricao">
        Após o pagamento de qualquer um dos nossos serviços, seja por transferência ou depósito, 
        certifique-se de enviar o comprovativo para validação nos formatos PDF ou imagem ( PNG, JPG, JPEG), 
        pelo nosso email, whatsApp, ou pelo site clicando no icon de upload de fcheiro.
      </p>

      <table className="tabela-servicos">
        <thead>
          <tr>
            <th>Serviço</th>
            <th>Plano</th>
            <th>Estado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map((s) => (
            <tr key={s.id}>
                <td>{s.nome}</td>
                <td>{s.plano}</td>
                <td>
                <span className={`estado ${s.estado.replace(" ", "-").toLowerCase()}`}>
                    {s.estado}
                </span>
                </td>
                <td>
                {s.estado === "Por pagar" ? (
                    <div className="upload-container">
                    <input
                        type="file"
                        id={`file-${s.id}`}
                        className="input-file"
                        accept="image/*,.pdf"
                    />
                    <label htmlFor={`file-${s.id}`} className="btn-upload">
                        <FaUpload />
                    </label>
                    <button className="btn">Detalhes</button>
                    </div>
                ) : (
                    <button className="btn">Detalhes</button>
                )}
                </td>
            </tr>
            ))}
        </tbody>
      </table>
      <button className="btn ver-todo">Ver tudo</button>
    </div>
  );
}
