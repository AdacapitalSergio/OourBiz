import React from 'react';
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import "./estiloQuemSomosBanner.css";

const QuemSomosBanner = () => {
  return (
    <main className="main-quemSomos">
        <section className="background-quemSomos">
            <div className="overlay-quemSomos"></div>
            <article className="conteiner-content-quemSomos">
                <h1 className="h1-quemSomos">Quem somos</h1>
                <p className="p-quemSomos">
                    Saiba mais sobre quem somos e o porquê confiar a sua empresa a nós. 
                </p>
                <Link to="/#">
                    <button className='button-quemSomos'>
                        Fale com nossos especialistas
                    </button>
                </Link>
            </article>
        </section>
    </main>
  );
};

export default QuemSomosBanner;
