import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { enviarCandidatura } from "../../services/websiteService";
import "./ModalCandidatura.css";

export default function ModalCandidatura({ open, onClose, vaga }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    titulo_vaga: vaga?.vaga || "",
    Primeiro_nome: "",
    Sobrenome: "",
    email: "",
    telefone: "",
    localizacao: "",
    formacao: "",
    escolaridade: "",
    ano_inicio: "",
    ano_termino: "",
    bi: null,
    declaracao_certificado: null,
    curriculum_vitae: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setForm({ ...form, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await enviarCandidatura(form);

      toast.success("Candidatura enviada com sucesso!");

      setForm({
        titulo_vaga: vaga?.vaga || "",
        Primeiro_nome: "",
        Sobrenome: "",
        email: "",
        telefone: "",
        localizacao: "",
        formacao: "",
        escolaridade: "",
        ano_inicio: "",
        ano_termino: "",
        bi: null,
        declaracao_certificado: null,
        curriculum_vitae: null,
      });

      onClose();
    } catch (error) {
      toast.error("Erro ao enviar candidatura, tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="modal-overlay-candidatura">
          <motion.div className="modal-box">
            <button onClick={onClose} className="modal-close-candidatura">
              <X />
            </button>

            <h2>Candidatar-se a vaga: {vaga.vaga}</h2>

            <form onSubmit={handleSubmit} className="modal-form">

              <div className="input-selentio">
                <div className="input-group">
                  <label>Primeiro nome</label>
                  <input name="Primeiro_nome" placeholder="Primeiro nome" value={form.Primeiro_nome} onChange={handleChange} required />
                </div>

                <div className="input-group">
                  <label>Sobrenome</label>
                  <input name="Sobrenome" placeholder="Sobrenome" value={form.Sobrenome} onChange={handleChange} required />
                </div>

                <div className="input-group">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="input-selentio">
                <div className="input-group">
                  <label>Telefone</label>
                  <input name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} required />
                </div>

                <div className="input-group">
                  <label>Localização</label>
                  <input name="localizacao" placeholder="Localização" value={form.localizacao} onChange={handleChange} required />
                </div>

                <div className="input-group">
                  <label>Formação</label>
                  <input name="formacao" placeholder="Formação" value={form.formacao} onChange={handleChange} required />
                </div>
              </div>


              <div className="input-selentio">
                <div className="input-group">
                  <label>Escolaridade</label>
                  <select name="escolaridade" value={form.escolaridade} onChange={handleChange} required>
                    <option value="">Selecione</option>
                    <option value="medio">Ensino médio</option>
                    <option value="universidade">Universidade</option>
                    <option value="licenciado">Licenciado</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Ano de início</label>
                  <input type="number" name="ano_inicio" placeholder="Ano de início" value={form.ano_inicio} onChange={handleChange} required />
                </div>

                <div className="input-group">
                  <label>Ano de término</label>
                  <input type="number" name="ano_termino" placeholder="Ano de término" value={form.ano_termino} onChange={handleChange} required />
                </div>
              </div>

              <div className="input-selentio">
                <div className="input-group">
                  <label>B.I</label>
                  <input type="file" name="bi" onChange={handleFileChange} required />
                </div>

                <div className="input-group">
                  <label>Declaração / Certificado</label>
                  <input type="file" name="declaracao_certificado" onChange={handleFileChange} required />
                </div>

                <div className="input-group">
                  <label>Curriculum Vitae</label>
                  <input type="file" name="curriculum_vitae" onChange={handleFileChange} required />
                </div>
              </div>


              <button type="submit" disabled={loading} className="btn-submit">
                <Send size={16} />
                {loading ? "Enviando..." : "Enviar candidatura"}
              </button>

            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
