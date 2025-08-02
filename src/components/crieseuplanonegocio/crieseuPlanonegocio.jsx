import React from "react";
import "./estiloCriePlano.css"
import { Link } from "react-router-dom";
export default function QuartaSection2() {

  return (
    <section className="section-quarta2">
        <div className="overlay-quarta2"></div>
        <article className="article1-quarta2">

        </article>
        <article className="article2-quarta2">
            <div className="conteiner-content-quarta2">
                <h2 className="h2-quarta2">
                    Transforme a sua ideia num site profissional, encomende 
                    agora e conquiste o mundo online.
                </h2>
                <Link to="/">
                    <button className='button-quarta2'>
                        Solicite agora
                    </button>
                </Link>
            </div>
        </article>
    </section>
  );
}
