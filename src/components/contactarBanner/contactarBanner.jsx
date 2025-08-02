import React from 'react';
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import "./estiloContactarBanner.css";

const ContactarBanner = () => {
  return (
    <main className="main-contactar">
        <section className="background-contactar">
            <div className="overlay-contactar"></div>
            <article className="conteiner-content-contactar">
                <h1 className="h1-contactar">Contactos</h1>
                <p className="p-contactar">
                    Fale connosco sem assumir qualquer tipo de compromisso.
                </p>
                <Link to="/#">
                    <button className='button-contactar'>
                        Fale com nossos especialistas
                    </button>
                </Link>
            </article>
        </section>
    </main>
  );
};

export default ContactarBanner;
