import React from "react";
import "./Contactos.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaBots, FaMessage } from "react-icons/fa6";

export default function Contactos() {

    const phone = "244928003757";
    const message = encodeURIComponent("Olá! Preciso de mais informações.");
    const link = `https://wa.me/${phone}?text=${message}`;
    return (
        <section className="container-contactoss" id="contactar-nextgen">
            <div className="conteudo-contactoss">
                <div className="delay-contactoss"></div>
                <h2>Contactos</h2>
                <h3>Fale com a nossa equipe para mais esclarecimentos</h3>
                <a className="btn-contactoss" href={link} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={22} />
                    WhatsApp
                </a>
                <Link className="btn-contactoss">
                    <FaMessage size={20} />
                    Chat Bot
                </Link>
            </div>
            
        </section>
    );
}
