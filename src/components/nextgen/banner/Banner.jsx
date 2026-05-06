import React, { useEffect, useRef, useState } from "react";
import "./Banner.css";
import bg from "../../../assets/imagens/Fundo_NextGen.png";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { useNavigate, useLocation } from "react-router-dom";

export default function Banner() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
  
    const scrollToSection = (id) => {
      if (location.pathname !== "/nextgen") {
        navigate("/nextgen");
  
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 1000); // espera render
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

  useEffect(() => {
    const typedTitle = new Typed(titleRef.current, {
      strings: ["Ourbiz-NextGen"],
      typeSpeed: 120,
      showCursor: false,
      onComplete: () => {
        const typedSubtitle = new Typed(subtitleRef.current, {
          strings: [
            "O futuro do empreendedorismo universitário, modernização dos negócios e suporte para iniciantes"
          ],
          typeSpeed: 40,
          showCursor: false,
          onComplete: () => {
            setShowButton(true); // 👈 ativa animação
          }
        });
      }
    });

    return () => typedTitle.destroy();
  }, []);

  return (
    <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <div className="hero-content">
          <h1 ref={titleRef}></h1>
          <p ref={subtitleRef}></p>
          {showButton && (
            <motion.button
                className="hero-btn"
                
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
                onClick={() => scrollToSection("inscricao-nextgen")}
            >
                Inscreva-se agora mesmo
            </motion.button>
            )}
        </div>
      </div>
    </section>
  );
}
