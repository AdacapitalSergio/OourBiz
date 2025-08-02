import React from "react";
import "./FormularioWebsite.css";

export default function Texte() {
  return (
    <div className="container">
      <div className="form-box">
        <h2 className="form-title">
          Formulário de solicitação de Criação de Website
        </h2>
        <p className="form-desc">
          Preencha este formulário com suas informações e entraremos em contato
          com uma proposta personalizada. É simples, rápido e profissional.
        </p>

        <form>
          <div className="form-group">
            <label>
              1. Nome completo ou nome da empresa <span className="required">*</span>
            </label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>
              2. Email para contato <span className="required">*</span>
            </label>
            <input type="email" />
          </div>

          <div className="form-group">
            <label>
              3. Telefone / WhatsApp <span className="required">*</span>
            </label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>
              4. Qual o objetivo principal do site? <span className="required">*</span>
            </label>
            <div className="check-options">
              <label><input type="checkbox" /> Vender produtos ou serviços</label>
              <label><input type="checkbox" /> Apresentar portfólio ou currículo</label>
              <label><input type="checkbox" /> Blog ou notícias</label>
              <label><input type="checkbox" /> Outro</label>
            </div>
            <input type="text" placeholder="Especifique" />
          </div>

          <div className="form-group">
            <label>5. Você já tem domínio (ex: www.seusite.com)?</label>
            <div className="check-options">
              <label><input type="radio" name="dominio" /> Sim</label>
              <label><input type="radio" name="dominio" /> Não</label>
            </div>
            <input type="text" placeholder="Qual?" />
          </div>

          <div className="form-group">
            <label>
              6. Existe algum logótipo ou identidade visual da sua marca ou empresa?
            </label>
            <div className="check-options">
              <label><input type="radio" name="logo" /> Sim, já possuo</label>
              <label><input type="radio" name="logo" /> Não possuo ainda</label>
            </div>
          </div>

          <div className="form-group">
            <label>
              7. Quais áreas ou funcionalidades você deseja (ex: galeria, blog, reservas)?
            </label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>
              8. Deseja integração do site (Ex: WhatsApp, ChatBot, Instagram, etc)?
            </label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>
              9. Tem algum site que você gosta e gostaria de usar como referência?
            </label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>10. Deseja receber o projeto até:</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>11. Comentários adicionais (opcional)</label>
            <textarea></textarea>
          </div>

          <div className="form-group">
            <button type="submit" className="submit-btn">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
