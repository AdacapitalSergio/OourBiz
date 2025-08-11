import React from "react";
import "./estiloPosConheca.css";
import { Link } from "react-router-dom";
import seta from "../../assets/imagens/setaDt.png";

export default function PosConheca() {

  return (
    <section className="section-pos">
        
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
            <div className="overdeley-pos"></div>
            <article className="article2-lucratividade">
              <p className="p-lucratividade">
                  O nosso objectivo é ajudar a melhorar a lucratividade
                  das empresas, bem como a qualidade de vida de seus 
                  sócios e menor risco aos negócios.
              </p>
              <p className="p-lucratividade">
                  Acreditamos que lucrar, mais que um direito, é uma 
                  obrigação das empresas. O difícil é fazer simples, 
                  por isso, pequenas e médias empresas precisam de 
                  consultoria integrada e multidisciplinar,  ter metas 
                  e planear é o caminho mais rápido para se alcançar o 
                  sucesso nos negócios.
              </p>
            </article>
        </article>
    </section>
  );
}
