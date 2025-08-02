import React from 'react';
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import "./estiloPrincipalBanner.css";

const PrincipalBanner = () => {
  return (
    <main className="main-principal">
        <section className="background">
            <div className="overlay"></div>
            <article className="conteiner-content">
                <h1 className="h1-principal">Transforme o seu negócio</h1>
                <p className="p-principal">O mercado está em constante movimento. 
                    Mas e você? Está acompanhando as transformações? A Ourbiz oferece 
                    soluções inteligentes e inovadoras em consultoria de gestão empresarial 
                    para desenvolver o potencial do seu negócio.
                </p>
                <Link to="/servicos">
                    <button className='button-main'>
                        Consulte os nossos serviços 
                    </button>
                </Link>
            </article>
        </section>
    </main>
  );
};

export default PrincipalBanner;