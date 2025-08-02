import React, { useState } from "react";
import logotipo from "../../assets/imagens/logotipo.png";
import { Link } from "react-router-dom";
import { FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import "./estiloHeader.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navBar">
        <Link to="/">
          <img src={ logotipo } alt="Logotipo" className="logotipo" />
        </Link>

        <div className="menuToggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`navList ${menuOpen ? "open" : ""}`}>
          <li><Link to="/servicos" className="navLi" onClick={toggleMenu}>Serviços</Link></li>
          <li><Link to="/planos" className="navLi" onClick={toggleMenu}>Planos</Link></li>
          <li><Link to="/" className="navLi" onClick={toggleMenu}>Vagas</Link></li>
          <li><Link to="/quemsomos" className="navLi" onClick={toggleMenu}>Quem somos</Link></li>
          <li><Link to="/contactar" className="contactar-botao" onClick={toggleMenu}>Contactar</Link></li>
          <li><Link to="/login" className="login-botao" onClick={toggleMenu}>Login</Link></li>
        </ul>
      </nav>
    </>
  );
}
