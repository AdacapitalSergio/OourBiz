import React, { useEffect, useRef, useState } from "react";
import "./Banner.css";
import bg from '../../../assets/imagens/fundoVoluntariado.png';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Banner() {

  return (
    <section className="hero-voluntariado" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay-voluntariado">
        <div className="hero-content-voluntariado">
          <p className="p-banner-voluntario-voluntariado">
            Participe como voluntário e faça parte de uma equipe disposta a despertar 
            mentes para um futuro de grandes inovadores.
          </p>
            <Link to="/candidatar-voluntariado">
              <motion.button
                className="hero-btn-voluntariado"
                
                initial={{ 
                x: -120, 
                opacity: 0,
                scale: 0.95
                }}

                animate={{ 
                x: 0, 
                opacity: 1,
                scale: 1
                }}

                transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                }}

                whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.2)"
                }}

                whileTap={{
                scale: 0.97
                }}
              >
                  Candidatar-se
              </motion.button>
            </Link>
        </div>
      </div>
    </section>
  );
}
