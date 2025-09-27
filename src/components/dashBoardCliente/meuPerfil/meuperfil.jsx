import React, { useState } from "react";
import { salvarPerfil } from "../../../services/websiteService";
import "./estiloMeuperfil.css";
import Modal from "../../modal/modal";

export default function PerfilForm() {
  const [form, setForm] = useState({
    // Dados pessoais
    nome: "",
    sobrenome: "",
    email: "",
    contato: "",
    whatsapp: "",
    localidade: "",
    cidade: "",
    pais: "",
    endereco1: "",
    endereco2: "",

    // Dados empresariais
    empresa: "",
    nif: "",
    emailEmpresa: "",
    contatoEmpresa: "",
    whatsappEmpresa: "",
    localidadeEmpresa: "",
    cidadeEmpresa: "",
    paisEmpresa: "",
    endereco1Empresa: "",
    endereco2Empresa: "",

    // Preferências
    notificacoesEmail: "pessoal",
    comprovativos: "pessoal",
    sms: "pessoal",
  });
  const [modal, setModal] = useState({ show: false, type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await salvarPerfil(form);
      setModal({ show: true, type: "success", message: "Perfil atualizado com sucesso!" });
    } catch {
      setModal({ show: true, type: "error", message: "Erro ao atualizar perfil." });
    }
  };

  return (
    <form className="perfil-form" onSubmit={handleSubmit}>
      {/* Dados pessoais */}
      <div className="card">
        <h3>Dados pessoais</h3>
        <div className="grid">
          <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
          <input name="sobrenome" placeholder="Sobrenome" value={form.sobrenome} onChange={handleChange} />
          <input name="email" placeholder="E-mail" value={form.email} onChange={handleChange} />
          <input name="contato" placeholder="Contato" value={form.contato} onChange={handleChange} />
          <input name="whatsapp" placeholder="Contato por WhatsApp" value={form.whatsapp} onChange={handleChange} />
          <input name="localidade" placeholder="Localidade" value={form.localidade} onChange={handleChange} />
          <input name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} />
          <select name="pais" value={form.pais} onChange={handleChange}>
            <option value="">País</option>
            <option value="Angola">Angola</option>
            <option value="Brasil">Brasil</option>
          </select>
          <input name="endereco1" placeholder="Endereço 1" value={form.endereco1} onChange={handleChange} />
          <input name="endereco2" placeholder="Endereço 2" value={form.endereco2} onChange={handleChange} />
        </div>
        <button type="submit" className="btn-conf">Confirmar alteração</button>
      </div>

      {/* Dados empresariais */}
      <div className="card">
        <h3>Dados empresarial</h3>
        <div className="grid">
          <input name="empresa" placeholder="Nome da empresa" value={form.empresa} onChange={handleChange} />
          <input name="nif" placeholder="NIF" value={form.nif} onChange={handleChange} />
          <input name="emailEmpresa" placeholder="E-mail" value={form.emailEmpresa} onChange={handleChange} />
          <input name="contatoEmpresa" placeholder="Contato" value={form.contatoEmpresa} onChange={handleChange} />
          <input name="whatsappEmpresa" placeholder="Contato por WhatsApp" value={form.whatsappEmpresa} onChange={handleChange} />
          <input name="localidadeEmpresa" placeholder="Localidade" value={form.localidadeEmpresa} onChange={handleChange} />
          <input name="cidadeEmpresa" placeholder="Cidade" value={form.cidadeEmpresa} onChange={handleChange} />
          <select name="paisEmpresa" value={form.paisEmpresa} onChange={handleChange}>
            <option value="">País</option>
            <option value="Angola">Angola</option>
            <option value="Brasil">Brasil</option>
          </select>
          <input name="endereco1Empresa" placeholder="Endereço 1" value={form.endereco1Empresa} onChange={handleChange} />
          <input name="endereco2Empresa" placeholder="Endereço 2" value={form.endereco2Empresa} onChange={handleChange} />
        </div>
        <button type="submit" className="btn-conf">Confirmar alteração</button>
      </div>

      {/* Preferências */}
     <div className="card">
        <h3>Preferências</h3>

        <div className="preferencias">
            <p>Dados de fatura:</p>
            <label className="radio-option">
            <input
                type="radio"
                name="notificacoesEmail"
                value="pessoal"
                checked={form.notificacoesEmail === "pessoal"}
                onChange={handleChange}
            />
            <span>Utilizar dados pessoais na fatura</span>
            </label>

            <label className="radio-option">
            <input
                type="radio"
                name="notificacoesEmail"
                value="empresarial"
                checked={form.notificacoesEmail === "empresarial"}
                onChange={handleChange}
            />
            <span>Utilizar dados empresarial na fatura</span>
            </label>
        </div>

        <div className="preferencias">
            <p>E-mail de notificações:</p>
            <label className="radio-option">
            <input
                type="radio"
                name="comprovativos"
                value="pessoal"
                checked={form.comprovativos === "pessoal"}
                onChange={handleChange}
            />
            <span>Utilizar o email pessoal para envio</span>
            </label>

            <label className="radio-option">
            <input
                type="radio"
                name="comprovativos"
                value="empresarial"
                checked={form.comprovativos === "empresarial"}
                onChange={handleChange}
            />
            <span>Utilizar o email empresarial para envio</span>
            </label>
        </div>

        <div className="preferencias">
            <p>Configurações SMS:</p>
            <label className="radio-option">
            <input
                type="radio"
                name="sms"
                value="pessoal"
                checked={form.sms === "pessoal"}
                onChange={handleChange}
            />
            <span>Utilizar contato pessoal para receber SMS</span>
            </label>

            <label className="radio-option">
            <input
                type="radio"
                name="sms"
                value="empresarial"
                checked={form.sms === "empresarial"}
                onChange={handleChange}
            />
            <span>Utilizar contato empresarial para receber SMS</span>
            </label>
        </div>

        <button type="submit" className="btn-conf">Confirmar alteração</button>
        </div>

        <Modal
        show={modal.show}
        type={modal.type}
        message={modal.message}
        onClose={() => setModal({ ...modal, show: false})}
      />
    </form>
  );
}
