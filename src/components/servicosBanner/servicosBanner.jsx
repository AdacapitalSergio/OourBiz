import React from 'react';
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import "./estiloServicoBanner.css";

const ServicoBanner = () => {
  return (
    <main className="main-servicos">
        <section className="background-servicos">
            <div className="overlay-servicos"></div>
            <article className="conteiner-content-servicos">
                <h1 className="h1-servicos">Serviços</h1>
                <p className="p-servicos">
                    Veja qual dos nossos serviços poderá ajudar a 
                    trasnformar o teu negócio. 
                </p>
                <Link to="/contactar">
                    <button className='button-servicos'>
                        Fale com nossos especialistas
                    </button>
                </Link>
            </article>
        </section>
    </main>
  );
};

export default ServicoBanner;
