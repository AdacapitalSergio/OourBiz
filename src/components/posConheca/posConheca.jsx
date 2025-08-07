import React from "react";
import "./estiloPosConheca.css";
import { Link } from "react-router-dom";
import seta from "../../assets/imagens/setaDt.png";

export default function PosConheca() {

  return (
    <section className="section-pos">
        <div className="overdeley-pos"></div>
        <article className="article1-pos">
            <div className="div-pos"></div>
            <p className="p-pos">
                A <span className="span-pos">OurBiz Consultoria de Gestão Limitada,</span> é uma 
                sociedade privada de responsabilidade limitada, com sede no 
                Lubango, Huíla e filial em Luanda/Angola, foi fundada no dia 
                5 de maio de 2015. Possui, assim, mais de 5 anos de experiência 
                em consultoria para micros, pequenas e médias empresas, instituições 
                públicas e do terceiro sector, com foco em pequenas empresas.
            </p>
            <Link to="/quemsomos" className="link-pos">Saiba mais sobre nós <img src={ seta } alt="Seta" className="link-seta" /></Link>
        </article>
        <article className="article2-pos">
            {/*<img src={ logoVio } alt="Logotipo da AdaCapital" className="logotipo" />*/}
        </article>
    </section>
  );
}
