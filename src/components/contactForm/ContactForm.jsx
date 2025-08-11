import React, { useState } from 'react';
import './ContactForm.css';
import { sendContactMessage } from '../../services/websiteService';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    contacto: '',
    mensagen: ''
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback('');

    try {
      await sendContactMessage(formData);
      setFeedback('✅ Mensagem enviada com sucesso!');
      setFormData({ contacto: '', mensagen: '' });
    } catch {
      setFeedback('❌ Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Entre em Contato</h2>

      <input
        type="text"
        name="contacto"
        placeholder="Seu email ou telefone"
        value={formData.contacto}
        onChange={handleChange}
        required
      />

      <textarea
        name="mensagen"
        placeholder="Sua mensagem..."
        value={formData.mensagen}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit" disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar'}
      </button>

      {feedback && <p className="feedback">{feedback}</p>}
    </form>
  );
}
