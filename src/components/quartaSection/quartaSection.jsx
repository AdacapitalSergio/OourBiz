import React from "react";
import "./estiloQuartaSection.css"
import { Link } from "react-router-dom";
export default function QuartaSection() {

  return (
    <section className="section-quarta">
        <div className="overlay-quarta"></div>
        <article className="article2-quarta">
            <div className="conteiner-content-quarta">
                <h3 className="h1-quarta">
                    Crie o seu site profissional e impressione, agora!
                </h3>
                <h2 className="h2-quarta">
                    Transforme a sua ideia num site profissional, 
                    encomende agora e conquiste o mundo online.
                </h2>
                <Link to="/criarsite">
                    <button className='button-quarta'>
                        Solicite agora
                    </button>
                </Link>
            </div>
        </article>
        <article className="article1-quarta">

        </article>
    </section>
  );
}
