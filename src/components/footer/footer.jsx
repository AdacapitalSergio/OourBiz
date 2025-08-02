import React from "react";
const ano = new Date().getFullYear();
import "./estiloFooter.css";

export default function Footer() {
  return (
    <footer className="f-footer">
        <p>© {ano} Direitos reservados - <a href="/termos">Termos de uso </a> 
            - <a href="/politicas"> Política de privacidade</a>
        </p>
    </footer>
  );
}