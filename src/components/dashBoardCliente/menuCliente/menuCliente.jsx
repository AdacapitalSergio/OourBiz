import React from "react";
import { Link } from "react-router-dom";
import "./estiloMenuCliente.css";

export default function MenuCliente() {

  return (
    <section className="menu-cliente">
        <ul className="ul-menu-cliente">
            <Link className="link1-menu-cliente" to="/dashboard-cliente">
                <li className="li-menu-cliente">Acesso rápido</li>
            </Link>
            <Link className="link-menu-cliente" to="/">
                <li>Página incial</li>
            </Link>
            <Link className="link-menu-cliente" to="/dashboard-cliente">
                <li>Meu perfil</li>
            </Link>
            <Link className="link-menu-cliente" to="/perfil-cliente">
                <li>Dados da conta</li>
            </Link>
            <Link className="link-menu-cliente">
                <li>Serviços/Pagamentos</li>
            </Link>
            <Link className="link-menu-cliente">
                <li>Serviços/Pagamentos</li>
            </Link>
            <Link className="link-menu-cliente">
                <li>Definições de segurança</li>
            </Link>
        </ul>
    </section>
  );
}
