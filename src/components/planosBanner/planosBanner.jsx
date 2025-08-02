import React from 'react';
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import "./estiloPlanosBanner.css";

const PlanosBanner = () => {
  return (
    <main className="main-planos">
        <section className="background-planos">
            <div className="overlay-planos"></div>
            <article className="conteiner-content-planos">
                <h1 className="h1-planos">Planos</h1>
                <p className="p-planos">
                    Tenha a possibilidade de escolher um plano que melhor 
                    atenda as necessidades do seu negócio. 
                </p>
                <Link to="/#">
                    <button className='button-planos'>
                        Fale com nossos especialistas
                    </button>
                </Link>
            </article>
        </section>
    </main>
  );
};

export default PlanosBanner;
