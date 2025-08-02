import React from 'react';
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import "./estiloCriarSiteBanner.css";

const CriarSiteBanner = () => {
  return (
    <main className="main-criarsite">
        <section className="background-criarsite">
            <div className="overlay-criarsite"></div>
            <article className="conteiner-content-criarsite">
                <h1 className="h1-criarsite">Serviços</h1>
                <p className="p-criarsite">
                    Transforme a sua ideia num site profissional, encomende agora 
                    e conquiste o mundo online.
                </p>
                <Link to="/#contactar">
                    <button className='button-criarsite'>
                        Fale com nossos especialistas
                    </button>
                </Link>
            </article>
        </section>
    </main>
  );
};

export default CriarSiteBanner;
