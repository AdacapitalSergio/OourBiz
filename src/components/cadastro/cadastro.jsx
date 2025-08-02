import React from "react";
import "./estiloCadastro.css"
import { Link } from "react-router-dom";
import logotipo from '../../assets/imagens/logotipo.png';
import seta from '../../assets/imagens/setaVoltar.png';

export default function Cadastro() {

  return (
    <section className="section-cadastro">
        <div className="overlay-cadastro"></div>
        <article className="article1-cadastro">
            <Link to="/">
                <img src={seta} alt="" className="imagem-seta"/>
            </Link>
            <div className="div-linha-cadastro"></div>
            <h2 className="h2-cadastro2">Cadastrar</h2>
            <form action="" className="formulario-cadastro">
                <input type="text" name="" id="" required placeholder="Nome completo" className="input-cadastro"/><br />
                <input type="email" name="" id="" required placeholder="Email" className="input-cadastro" /><br />
                <input type="tel" name="" id="" required placeholder="Telefone" className="input-cadastro"/><br />
                <input type="password" name="" id="" required placeholder="Definir palavra passe" className="input-cadastro" /><br />
                <input type="password" name="" id="" required placeholder="Confirmar palavra passe" className="input-cadastro" /><br />
                <button tipy="submit" className="btn-cadastro">Confirmar</button><br />
                <Link className="link-cadastro" to="/login">
                    Já possue uma conta? <span>Fazer login.</span>
                </Link>
            </form>
        </article>
        <article className="article2-cadastro">
            <div className="conteiner-content-cadastro">
                <img src={logotipo} alt="Logotipo" className="imagem-loog-cadastro"/>
            </div>
        </article>
    </section>
  );
}
