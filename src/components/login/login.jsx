import React, { useState, useContext } from "react";
import "./estiloLogin.css";
import { Link, useNavigate } from "react-router-dom";
import logotipo from "../../assets/imagens/logotipo.png";
import seta from "../../assets/imagens/setaVoltar.png";
import Modal from "../modal/modal";
import { loginService } from "../../services/websiteService";
import { AuthContext } from "../../context/AuthContext";

export default function LoginComp() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modal, setModal] = useState({ show: false, type: "", message: "" });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const voltar = () => {
    navigate(-1);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginService(email, senha);

      if (data.access_token && data.usuario) {
        login(data.usuario, data.access_token);

        setModal({ show: true, type: "success", message: "Login feito com sucesso!" });

        setTimeout(() => {
          setModal({ ...modal, show: false });
          navigate("/dashboard-cliente");
        }, 1500);
      } else {
        setModal({
          show: true,
          type: "error",
          message: "Credenciais inválidas!",
        });
      }
    } catch (error) {
      setModal({
        show: true,
        type: "error",
        message: error.message || "Erro ao efetuar login!",
      });
    }
  };

  return (
    <section className="section-login">
      <div className="overlay-login"></div>
      <article className="article1-login">
        <Link onClick={voltar} className="link-voltar">
          <img src={seta} alt="" className="imagem-seta" />
        </Link>
        <div className="div-linha-login"></div>
        <h2 className="h2-login2">Fazer Login</h2>
        <form onSubmit={handleLogin} className="formulario-login">
          <input
            type="email"
            required
            placeholder="Email..."
            className="input-login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            required
            placeholder="Senha..."
            className="input-login"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <br />

          <button type="submit" className="btn-login">
            Entrar
          </button>
          <br />

          <Link className="link-login" to="/cadastrar">
            Não possui uma conta? <span>Cadastrar-se.</span>
          </Link>
        </form>
      </article>
      <article className="article2-login">
        <div className="conteiner-content-login">
          <img src={logotipo} alt="Logotipo" className="imagem-loog-login" />
        </div>
      </article>
      <Modal
        show={modal.show}
        type={modal.type}
        message={modal.message}
        onClose={() => setModal({ ...modal, show: false })}
      />
    </section>
  );
}
