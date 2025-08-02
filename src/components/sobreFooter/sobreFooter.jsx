import React from "react";
import logotipo from "../../assets/imagens/logotipo.png";
import { Link } from "react-router-dom";
import { FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTiktok, FaPinterest } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "./estiloSobreFooter.css";

export default function SobreFooter() {
  return (
    <footer className="main-sobrefooter">
      <aside className="aside-sobrefooter">
        <Link to="/">
          <img src={ logotipo } alt="Logotipo da AdaCapital" className="imagem-lofoFooter" />
        </Link>
        <h5 className="p1-sobrefooter">Ourbiz - consultoria de negócios</h5>
        <p className="p2-sobrefooter">
            Lubango - Huíla (Angola) Bairro da Nossa Senhora do Monte 
            Junto a Polícia de Intervenção Rápida
        </p>
        <a href="#" className="a1-sobrefooter">Acesse o nosso blog</a>
        <ul className="ul-icon">
            <li>
                <a href="/#" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
            </li>
            <li>
                <a href="/#" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </li>
            <li>
                <a href="/#" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
            </li>
            <li>
                <a href="/#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a href="/#" target="_blank" rel="noopener noreferrer">
                    <FaTiktok />
                </a>
            </li>
            <li>
                <a href="/#" target="_blank" rel="noopener noreferrer">
                    <BsTwitterX />
                </a>
            </li>
        </ul>
      </aside>
      <aside className="aside-sobrefooter">
        <h3 className="h3-sobrefooter">Nossos serviços</h3>
        <ul className="ul1-servicos">
            <li><p></p><a href="/#comunicar">Consultoria para MPMEs</a></li>
            <li><a href="/#comunicar">Consultoria para Startups</a></li>
            <li><a href="/#comunicar">Eventos e formação</a></li>
            <li><a href="/#comunicar">Marketing e estratégia</a></li>
            <li><a href="/#comunicar">Apoio e captação de recursos</a></li>   
        </ul>

        <ul className="ul2-servicos">
            <li><a href="#">Trabalhe connosco</a></li>
            <li><a href="#">Imprensa</a></li>
        </ul>
      </aside>
    </footer>
  );
}
