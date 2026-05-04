import React, { useState } from "react";
import "./Header.css";
import logo from "../../../assets/imagens/logotipo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
//import { Link } from "react-scroll";

import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  //const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/nextgen") {
      navigate("/nextgen");

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200); // espera render
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }

    setOpen(false); // fecha menu mobile
  };

  return (
    <header className="header-nextegen">
      <div className="header-container-nextegen">
        <Link to="/nextgen">
          <img src={logo} alt="logo" className="logo-nextegen" />
        </Link>

        {/*<nav className={`nav-nextegen ${open ? "active" : ""}`}>
          <Link to="/nextgen">Sobre</Link>
          <Link tp="#">Palestrantes</Link>
          <Link to="#">Programação</Link>
          <Link to="#">Locais</Link>
          <Link to="/voluntariado">Voluntariado</Link>
          <Link to="/#inscricao-nextgen" smooth duration={500}>Inscrição</Link>
        </nav>*/}

        <nav className={`nav-nextegen ${open ? "active-nextgen" : ""}`}>
          <button className="button-nextegen" onClick={() => scrollToSection("sobre-nextgen")}>Sobre</button>
          <button className="button-nextegen" onClick={() => scrollToSection("palestrantes-nextgen")}>Palestrantes</button>
          <button className="button-nextegen" onClick={() => scrollToSection("programacao-nextgen")}>Programação</button>
          <button className="button-nextegen" onClick={() => scrollToSection("locais-nextgen")}>Locais</button>

          <Link className="button-nextegen" to="/voluntariado">Voluntariado</Link>

          <button className="button-nextegen" onClick={() => scrollToSection("inscricao-nextgen")}>
            Inscrição
          </button>
        </nav>

        <button className="contact-btn-nextegen" onClick={() => scrollToSection("contactar-nextgen")}>Contactar</button>

        <div className="hamburger-nextegen" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu-nextegen ${open ? "show" : ""}`}>
        <button className="button-nextegen-mobile" onClick={() => scrollToSection("sobre-nextgen")}>Sobre</button>
          <button className="button-nextegen-mobile" onClick={() => scrollToSection("palestrantes-nextgen")}>Palestrantes</button>
          <button className="button-nextegen-mobile" onClick={() => scrollToSection("programacao-nextgen")}>Programação</button>
          <button className="button-nextegen-mobile" onClick={() => scrollToSection("locais-nextgen")}>Locais</button>

          <Link className="button-nextegen-mobile" to="/voluntariado">Voluntariado</Link>

          <button className="button-nextegen-mobile" onClick={() => scrollToSection("inscricao-nextgen")}>
            Inscrição
          </button>
        <button className="mobile-contact-nextegen" onClick={() => scrollToSection("contactar-nextgen")}>Contactar</button>
      </div>
    </header>
  );
}
