import React, { useState } from "react";
import "./Header.css";
import logo from "../../../assets/imagens/logotipo.png";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="logo" className="logo" />

        <nav className={`nav ${open ? "active" : ""}`}>
          <a href="#">Sobre</a>
          <a href="#">Palestrantes</a>
          <a href="#">Programação</a>
          <a href="#">Locais</a>
          <a href="#">Voluntariado</a>
          <a href="#">Inscrição</a>
        </nav>

        <button className="contact-btn">Contactar</button>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <a onClick={() => setOpen(false)}>Sobre</a>
        <a onClick={() => setOpen(false)}>Palestrantes</a>
        <a onClick={() => setOpen(false)}>Programação</a>
        <a onClick={() => setOpen(false)}>Locais</a>
        <a onClick={() => setOpen(false)}>Voluntariado</a>
        <a onClick={() => setOpen(false)}>Inscrição</a>
        <button className="mobile-contact">Contactar</button>
      </div>
    </header>
  );
}
