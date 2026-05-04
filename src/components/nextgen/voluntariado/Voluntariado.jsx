import React from "react";
import "./Voluntariado.css";
import { Link } from "react-router-dom";

export default function Voluntariado() {
  return (
    <section className="container-voluntariado">
        <div className="conteudo-voluntariado">
            <h2>Voluntariado</h2>
            <h3>Participe de uma ou de outra forma</h3>
            <p className="p-voluntariado"> 
                Seja um voluntário e faça parte de uma equipe disposta a despertar 
                mentes para um futuro de grandes inovadores, e a sua ajuda pode ainda 
                levar-te a obter vários beneficios.
            </p>
            <Link to="/voluntariado" className="btn-voluntariado">
                Saber mais como voluntariar-se
            </Link>
        </div>
        
    </section>
  );
}
