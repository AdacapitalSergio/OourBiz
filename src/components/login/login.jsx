import React from "react";
import "./estiloLogin.css"
import { Link } from "react-router-dom";
import logotipo from '../../assets/imagens/logotipo.png';
import seta from '../../assets/imagens/setaVoltar.png';

export default function LoginComp() {

  return (
    <section className="section-login">
        <div className="overlay-login"></div>
        <article className="article1-login">
            <Link to="/">
                <img src={seta} alt="" className="imagem-seta"/>
            </Link>
            <div className="div-linha-login"></div>
            <h2 className="h2-login2">Fazer Login</h2>
            <form action="" className="formulario-login">
                <input type="email" name="" id="" required placeholder="Email..." className="input-login"/><br />
                <input type="password" name="" id="" required placeholder="Senha..." className="input-login" /><br />
                <button tipy="submit" className="btn-login">Entrar</button><br />
                <Link className="link-login" to="/cadastrar">
                    Não possue uma conta? <span>Cadastrar-se.</span>
                </Link>
            </form>
        </article>
        <article className="article2-login">
            <div className="conteiner-content-login">
                <img src={logotipo} alt="Logotipo" className="imagem-loog-login"/>
            </div>
        </article>
    </section>
  );
}
