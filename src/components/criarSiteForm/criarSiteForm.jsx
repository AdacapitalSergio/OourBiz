import React, { useState } from "react";
import { enviarFormularioWebsite } from "../../services/websiteService";
import "./estiloCriarSiteForm.css";

export default function FormularioWebsite() {
  const [form, setForm] = useState({
    seuNome: "",
    seuEmail: "",
    seuTelefone: "",
    objetivoSite: [],
    outroObjetivo: "",
    temDominio: "",
    dominio: "",
    temLogotipo: "",
    sobreEmpresa: "",
    integracoesSite: "",
    referenciasSite: "",
    metodoContato: "",
    comentariosAdicionais: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm((prev) => {
        const objetivos = checked
          ? [...prev.objetivoSite, value]
          : prev.objetivoSite.filter((obj) => obj !== value);
        return { ...prev, objetivoSite: objetivos };
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await enviarFormularioWebsite(form);
      alert("Formulário enviado com sucesso!");
      setForm({
        seuNome: "",
        seuEmail: "",
        seuTelefone: "",
        objetivoSite: [],
        outroObjetivo: "",
        temDominio: "",
        dominio: "",
        temLogotipo: "",
        sobreEmpresa: "",
        integracoesSite: "",
        referenciasSite: "",
        metodoContato: "",
        comentariosAdicionais: ""
      });
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao enviar o formulário.");
    }
  };

  return (
    <div className="formulario-container">
      <h1>Formulário de solicitação de Criação de Website</h1>
      <p>
        Preencha este formulário com suas informações e entraremos em contato
        com uma proposta personalizada. É rápido, sem compromisso!
      </p>

      <form onSubmit={handleSubmit}>
        {/* Nome */}
        <label>1. Nome completo ou nome da empresa <span className="required">*</span></label>
        <input
          type="text"
          name="seuNome"
          value={form.seuNome}
          onChange={handleChange}
          required
          placeholder="Preencha aqui"
        />
        <hr />

        {/* Email */}
        <label>2. Email para contato <span className="required">*</span></label>
        <input
          type="email"
          name="seuEmail"
          value={form.seuEmail}
          onChange={handleChange}
          required
          placeholder="Preencha aqui"
        />
        <hr />

        {/* Telefone */}
        <label>3. Telefone / WhatsApp <span className="required">*</span></label>
        <input
          type="tel"
          name="seuTelefone"
          value={form.seuTelefone}
          onChange={handleChange}
          required
          placeholder="Preencha aqui"
        />
        <hr />

        {/* Objetivo */}
        <label>4. Qual o objetivo principal do site? <span className="required">*</span></label>
        <div className="checkbox-group">
          {[
            "Apresentar minha empresa",
            "Vender produtos online (e-commerce)",
            "Receber orçamentos/pedidos de clientes",
            "Mostrar portfólio ou serviços"
          ].map((obj, idx) => (
            <label key={idx}>
              <input
                type="checkbox"
                name="objetivoSite"
                value={obj}
                checked={form.objetivoSite.includes(obj)}
                onChange={handleChange}
              />
              {obj}
            </label>
          ))}
        </div>

        <label>Outros</label>
        <input
          type="text"
          name="outroObjetivo"
          value={form.outroObjetivo}
          onChange={handleChange}
          placeholder="Diga qual"
        />
        <hr />

        {/* Tem domínio */}
        <label>5. Já possui um domínio?</label>
        <div className="radio-group">
          {["Sim", "Não", "Ainda não sei o que é isso"].map((opt, idx) => (
            <label key={idx}>
              <input
                type="radio"
                name="temDominio"
                value={opt}
                checked={form.temDominio === opt}
                onChange={handleChange}
              />
              {opt}
            </label>
          ))}
        </div>

        <label>Se sim, qual é o domínio?</label>
        <input
          type="url"
          name="dominio"
          value={form.dominio}
          onChange={handleChange}
          placeholder="ex: https://www.seusite.com"
        />
        <hr />

        {/* Tem logotipo */}
        <label>6. Já possui logotipo ou identidade visual da sua empresa?</label>
        <div className="radio-group">
          {["Sim", "Não", "Em processo de criação"].map((opt, idx) => (
            <label key={idx}>
              <input
                type="radio"
                name="temLogotipo"
                value={opt}
                checked={form.temLogotipo === opt}
                onChange={handleChange}
              />
              {opt}
            </label>
          ))}
        </div>
        <hr />

        {/* Sobre empresa */}
        <label>7. Conte mais sobre sua empresa...</label>
        <textarea
          name="sobreEmpresa"
          value={form.sobreEmpresa}
          onChange={handleChange}
        />
        <hr />

        {/* Integrações */}
        <label>8. Deseja integrar algo no site?</label>
        <textarea
          name="integracoesSite"
          value={form.integracoesSite}
          onChange={handleChange}
        />
        <hr />

        {/* Referências */}
        <label>9. Tem algum site que você gosta e gostaria de usar como referência?</label>
        <input
          type="text"
          name="referenciasSite"
          value={form.referenciasSite}
          onChange={handleChange}
        />
        <hr />

        {/* Método de contato */}
        <label>10. Deseja receber a proposta por:</label>
        <div className="radio-group">
          {["WhatsApp", "Email", "Ambos"].map((opt, idx) => (
            <label key={idx}>
              <input
                type="radio"
                name="metodoContato"
                value={opt}
                checked={form.metodoContato === opt}
                onChange={handleChange}
              />
              {opt}
            </label>
          ))}
        </div>
        <hr />

        {/* Comentários adicionais */}
        <label>11. Comentários adicionais</label>
        <textarea
          name="comentariosAdicionais"
          value={form.comentariosAdicionais}
          onChange={handleChange}
        />

        {/* Botões */}
        <button type="submit" className="btn-enviar">
          Enviar proposta
        </button>
        <button
          type="button"
          className="btn-limpar"
          onClick={() =>
            setForm({
              seuNome: "",
              seuEmail: "",
              seuTelefone: "",
              objetivoSite: [],
              outroObjetivo: "",
              temDominio: "",
              dominio: "",
              temLogotipo: "",
              sobreEmpresa: "",
              integracoesSite: "",
              referenciasSite: "",
              metodoContato: "",
              comentariosAdicionais: ""
            })
          }
        >
          Limpar formulário
        </button>
      </form>
    </div>
  );
}
