import React, { useState } from "react";
import "./estiloCriarSiteForm.css";

export default function FormularioWebsite() {
  const [form, setForm] = useState({
    empresa: "",
    email: "",
    telefone: "",
    objetivo: [],
    siteExistente: "",
    urlSite: "",
    identidadeVisual: "",
    funcionalidades: "",
    referencia: "",
    prazo: "",
    observacoes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const objetivos = [...form.objetivo];
      if (checked) {
        objetivos.push(value);
      } else {
        const index = objetivos.indexOf(value);
        if (index > -1) objetivos.splice(index, 1);
      }
      setForm({ ...form, objetivo: objetivos });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <div className="formulario-container">
      <h1>Formulário de solicitação de Criação de Website</h1>
      <p>
        Preencha este formulário com suas informações e entraremos em contato
        com uma proposta personalizada. É rápido, sem compromisso!
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          1. Nome completo ou nome da empresa <span className="required">*</span>
        </label>
        <input
          type="text"
          name="empresa"
          value={form.empresa}
          onChange={handleChange}
          required
          placeholder="Preencha aqui"
        />
        <hr style={{ width: '100%'}} />
        <label>
          2. Email para contato <span className="required">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Preencha aqui"
        />
        <hr style={{ width: '100%'}} />

        <label>
          3. Telefone / WhatsApp <span className="required">*</span>
        </label>
        <input
          type="tel"
          name="telefone"
          value={form.telefone}
          onChange={handleChange}
          required
          placeholder="Preencha aqui"
        />
        <hr style={{ width: '100%'}} />
        
        <label>
          4. Qual o objetivo principal do site? <span className="required">*</span>
        </label>
        <div className="checkbox-group">
          {[
            "Apresentar minha empresa",
            "Vender produtos online (e-commerce)",
            "Receber orçamentos/pedidos de clientes",
            "Mostrar portfólio ou serviços",
          ].map((objetivo, idx) => (
            <label key={idx}>
              <input
                type="checkbox"
                name="objetivo"
                value={objetivo}
                checked={form.objetivo.includes(objetivo)}
                onChange={handleChange}
              />
              {objetivo}
            </label>
          ))}
        </div>
        <label>Outros</label>
        <input
          type="text"
          name="outroObjectivo"
          onChange={handleChange}
          placeholder="Diga qual"
        />
        <hr style={{ width: '100%'}} />

        <label>
          5. Já possui um domínio (ex: www.suaempresa.co.ao)?
        </label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="siteExistente"
              value="Sim"
              checked={form.siteExistente === "Sim"}
              onChange={handleChange}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="siteExistente"
              value="Não"
              checked={form.siteExistente === "Não"}
              onChange={handleChange}
            />
            Não
          </label>
          <label>
            <input
              type="radio"
              name="siteExistente"
              value="Ainda não sei o que é isso"
              checked={form.siteExistente === "Ainda não sei o que é isso"}
              onChange={handleChange}
            />
            Ainda não sei o que é isso
          </label>
        </div>

        {/* URL do site */}
        <label>Se sim, qual é o domínio?</label>
        <input
          type="url"
          name="urlSite"
          value={form.urlSite}
          onChange={handleChange}
          placeholder="ex: https://www.seusite.com"
        />
        <hr style={{ width: '100%'}} />

        {/* Identidade visual */}
        <label>6. Já possui logotipo ou identidade visual da sua empresa?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="identidadeVisual"
              value="Sim"
              checked={form.identidadeVisual === "Sim"}
              onChange={handleChange}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="identidadeVisual"
              value="Não"
              checked={form.identidadeVisual === "Não"}
              onChange={handleChange}
            />
            Não
          </label>
          <label>
            <input
              type="radio"
              name="identidadeVisual"
              value="Em processo de criação"
              checked={form.identidadeVisual === "Em processo de criação"}
              onChange={handleChange}
            />
            Em processo de criação
          </label>
        </div>
        <hr style={{ width: '100%'}} />

        <label>
          7. Conte mais sobre sua empresa, marca, produtos ou serviços (ex: o que 
          você vende, para quem, onde atua, diferenciais, etc.)
        </label>
        <textarea
          name="funcionalidades"
          value={form.funcionalidades}
          onChange={handleChange}
          placeholder="Preencha aqui"
        />
        <hr style={{ width: '100%'}} />

        {/* Funcionalidades */}
        <label>
          8. Deseja integrar algo no site? (ex: WhatsApp, Chatbot, Instagram, mapa, agendamentos, etc.)
        </label>
        <textarea
          name="funcionalidades"
          value={form.funcionalidades}
          onChange={handleChange}
          placeholder="Preencha aqui"
        />
        <hr style={{ width: '100%'}} />

        {/* Referência */}
        <label>9. Tem algum site que você gosta e gostaria de usar como referência?</label>
        <input
          type="text"
          name="referencia"
          value={form.referencia}
          onChange={handleChange}
        />
        <hr style={{ width: '100%'}} />

        {/* Prazo */}
        <label>10. Deseja receber a proposta por:</label>
        <div className="radio-group">
          {["WhatsApp", "Email", "Ambos"].map((prazo, idx) => (
            <label key={idx}>
              <input
                type="radio"
                name="prazo"
                value={prazo}
                checked={form.prazo === prazo}
                onChange={handleChange}
              />
              {prazo}
            </label>
          ))}
        </div>
        <hr style={{ width: '100%'}} />

        {/* Observações */}
        <label>11. Comentários adicionais (opcional)</label>
        <textarea
          name="observacoes"
          value={form.observacoes}
          onChange={handleChange}
          placeholder="Preencha aqui"
        />

        {/* Botão */}
        <button type="submit" className="btn-enviar">
          Enviar proposta
        </button>
        <button className="btn-limpar">
          Limpar formulário
        </button>
      </form>
    </div>
  );
}
