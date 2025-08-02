import React from "react";
import "./estiloCrieSeuNegocio.css"
import { Link } from "react-router-dom";

export default function CrieSeuNegocio() {
  return (
    <section className="section-criar">
        <div className="overlay-criar"></div>
        <article className="article2-criar">
            <div className="conteiner-content-criar">
                <h3 className="h1-criar">
                    Crie o seu plano de negócio, agora!
                </h3>
                <h2 className="h2-criar">
                    Não deixe as suas boas ideias para depois, 
                    crie um plano de negócio em poucos minutos!
                </h2>
                <Link to="/">
                    <button className='button-criar'>
                        Criar plano de negócio
                    </button>
                </Link>
            </div>
        </article>
        <article className="article1-criar">

        </article>
    </section>
  );
}