import React, { useState, useEffect } from "react";
import "./ContactModal.css";
import { enviarContacto } from "../../services/websiteService";

export default function ContactModal({ isOpen, onClose, servico }) {
  const [formData, setFormData] = useState({
    nome: "",
    provincia: "",
    municipio: "",
    email: "",
    telefone: "",
    area: "",
    servico: "",
    contactoPreferido: "whatsapp",
  });

  useEffect(() => {
    if (servico) {
      setFormData((prev) => ({ ...prev, servico: servico.titulo }));
    }
  }, [servico]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await enviarContacto(formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Entre em contacto agora mesmo!</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid">
            <input name="nome" placeholder="Seu nome completo" onChange={handleChange} required />
            <input name="area" placeholder="O que a sua empresa faz?" onChange={handleChange} />

            <select name="provincia" onChange={handleChange} required>
              <option value="">Seleccionar província</option>
              <option value="Luanda">Luanda</option>
              <option value="Huíla">Huíla</option>
            </select>

            <select name="municipio" onChange={handleChange} required>
              <option value="">Seleccionar município</option>
            </select>

            <input name="email" type="email" placeholder="Seu e-mail" onChange={handleChange} />
            <input name="telefone" placeholder="Telefone / WhatsApp" onChange={handleChange} />

            <input name="servico" value={formData.servico} readOnly />
          </div>

          <div className="contacto-pref">
            <p>Como prefere ser contactado?</p>
            <label>
              <input type="radio" name="contactoPreferido" value="whatsapp" defaultChecked onChange={handleChange} />
              Telefone / WhatsApp
            </label>
            <label>
              <input type="radio" name="contactoPreferido" value="email" onChange={handleChange} />
              E-mail
            </label>
          </div>

          <p className="info">Você não estará se comprometendo com nada ao nos contactar.</p>

          <button type="submit" className="btn-enviar">Enviar pedido</button>
        </form>
      </div>
    </div>
  );
}
