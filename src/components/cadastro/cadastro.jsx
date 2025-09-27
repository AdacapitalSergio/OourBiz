import React, { useState, useContext } from "react";
import "./estiloCadastro.css";
import { Link, useNavigate } from "react-router-dom";
import logotipo from '../../assets/imagens/logotipo.png';
import seta from '../../assets/imagens/setaVoltar.png';
import { register } from "../../services/websiteService";
import Modal from "../modal/modal";
import ModalSucessoCadastro from "../modal/ModalSucessoCadastro";
import { AuthContext } from "../../context/AuthContext";

export default function Cadastro() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    nome_completo: "",
    email: "",
    telefone: "",
    senha: "",
    confirmPassword: ""
  });

  const [modalErro, setModalErro] = useState({ show: false, type: "", message: "" });
  const [modalSucesso, setModalSucesso] = useState(false);

  const voltar = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmPassword) {
      setModalErro({ show: true, type: "error", message: "As senhas não coincidem!" });
      return;
    }

    try {
      const data = await register({
        nome_completo: formData.nome_completo,
        email: formData.email,
        telefone: formData.telefone,
        senha: formData.senha,
      });

      login(data.usuario, data.access_token);

      setModalSucesso(true);

    } catch (err) {
      setModalErro({ show: true, type: "error", message: err.message || "Erro ao cadastrar" });
    }
  };

  return (
    <section className="section-cadastro">
      <div className="overlay-cadastro"></div>

      <article className="article1-cadastro">
        <Link onClick={voltar}>
          <img src={seta} alt="" className="imagem-seta"/>
        </Link>

        <div className="div-linha-cadastro"></div>
        <h2 className="h2-cadastro2">Cadastrar</h2>

        <form className="formulario-cadastro" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="nome_completo" 
            value={formData.nome_completo}
            onChange={handleChange}
            required 
            placeholder="Nome completo" 
            className="input-cadastro"
          /><br />

          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
            placeholder="Email" 
            className="input-cadastro" 
          /><br />

          <input 
            type="tel" 
            name="telefone" 
            value={formData.telefone}
            onChange={handleChange}
            required 
            placeholder="Telefone" 
            className="input-cadastro"
          /><br />

          <input 
            type="password" 
            name="senha" 
            value={formData.senha}
            onChange={handleChange}
            required 
            placeholder="Definir palavra passe" 
            className="input-cadastro" 
          /><br />

          <input 
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword}
            onChange={handleChange}
            required 
            placeholder="Confirmar palavra passe" 
            className="input-cadastro" 
          /><br />

          <button type="submit" className="btn-cadastro">Confirmar</button><br />

          <Link className="link-cadastro" to="/login">
            Já possui uma conta? <span>Fazer login.</span>
          </Link>
        </form>
      </article>

      <article className="article2-cadastro">
        <div className="conteiner-content-cadastro">
          <img src={logotipo} alt="Logotipo" className="imagem-loog-cadastro"/>
        </div>
      </article>

      <Modal
        show={modalErro.show}
        type={modalErro.type}
        message={modalErro.message}
        onClose={() => setModalErro({ ...modalErro, show: false})}
      />

      <ModalSucessoCadastro
        show={modalSucesso}
        onConfigPerfil={() => navigate("/perfil-cliente")}
        onConfigMaisTarde={() => navigate("/dashboard-cliente")}
      />
    </section>
  );
}
