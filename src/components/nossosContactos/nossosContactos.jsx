import React from 'react';
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import "./estiloNossosContactos.css";
import foneIcon from "../../assets/imagens/foneIcon.png";
import emailIcon from "../../assets/imagens/emailIcon.png";
import gpsIcon from "../../assets/imagens/gpsIcon.png";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const NossosContactos = () => {
  return (
    <main className="main-nossoscontactos">
        <h1 className='h1-nossoscontactos'>Nossos Contactos</h1>
        <section className="section-nossoscontactos">
            <article className="article-nossoscontactos">
                <div className='div-nossoscontactos'>
                    <img src={foneIcon} alt="" className='imagem-nossoscontactos' />
                    <h3 className='h3-nossoscontactos'> +244 900 000 000</h3>
                </div>
                <div className='div-nossoscontactos'>
                    <img src={emailIcon} alt="" className='imagem-nossoscontactos' />
                    <h3 className='h3-nossoscontactos'>xxxxxxxx@ourbiz.ao</h3>
                </div>
            </article>
            <article className="article-nossoscontactos">
                <div className='div-nossoscontactos'>
                    <img src={gpsIcon} alt="" className='imagem-nossoscontactos' />
                    <h3 className='h3-nossoscontactosgps'>
                        Lubango - Huíla (Angola) Bairro da Nossa Senhora do Monte, 
                        junto a Polícia de Intervenção Rápida
                    </h3>
                </div>
                <div className='div-nossoscontactos'>
                    <ul className="ul-icon-nossoscontactos">
                        <li>
                            <a href="/#" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="/#" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="/#" target="_blank" rel="noopener noreferrer">
                                <FaYoutube />
                            </a>
                        </li>
                        <li>
                            <a href="/#" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="/#" target="_blank" rel="noopener noreferrer">
                                <FaTiktok />
                            </a>
                        </li>
                        <li>
                            <a href="/#" target="_blank" rel="noopener noreferrer">
                                <BsTwitterX />
                            </a>
                        </li>
                    </ul>
                </div>
            </article>
        </section>
    </main>
  );
};

export default NossosContactos;
