import React, { useState, useContext } from "react";
import logotipo from "../../assets/imagens/logotipo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle, FaBell } from "react-icons/fa";
import "./estiloHeader.css";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, user } = useContext(AuthContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navBar">
      <Link to="/">
        <img src={logotipo} alt="Logotipo" className="logotipo" />
      </Link>

      <div className="menuToggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navList ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/servicos" className="navLi" onClick={toggleMenu}>
            Serviços
          </Link>
        </li>
        <li>
          <Link to="/planos" className="navLi" onClick={toggleMenu}>
            Planos
          </Link>
        </li>
        <li>
          <Link to="/vagas" className="navLi" onClick={toggleMenu}>
            Vagas
          </Link>
        </li>
        <li>
          <Link to="/quemsomos" className="navLi" onClick={toggleMenu}>
            Quem somos
          </Link>
        </li>
        <li>
          <Link to="/contactar" className="contactar-botao" onClick={toggleMenu}>
            Contactar
          </Link>
        </li>

        {/* Se não estiver logado, mostra o botão de login */}
        {!isAuthenticated ? (
          <li>
            <Link to="/login" className="login-botao" onClick={toggleMenu}>
              Login
            </Link>
          </li>
        ) : (
          // Se estiver logado, mostra o perfil + notificações
          <li className="user-menu">
            <div className="user-info">
              <Link to="/dashboard-cliente" className="dashboard-link">
                <FaUserCircle className="user-icon" />
                <span className="user-name">
                  {user?.nome_completo || "Usuário"}
                </span>
              </Link>
              <FaBell className="bell-icon" />
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
}
