import React from "react";
import "./estiloConfieSuaEmpresa.css";
import lampadamao from "../../assets/imagens/lampadamao.jpg";
import maosDadas from "../../assets/imagens/maosDadas.jpg";
import senhorasJuntas from "../../assets/imagens/senhorasJuntas.jpg";

export default function ConfieSuaEmpresa() {
  return (
    <section className="section-confia">
        <h1 className="h1-confia">Confie sua empresa a quem  realmente entende do assunto.</h1>
        <article className="article1-confia">
            <h2 className="h2-confia">+5</h2>
            <div className="div-confia">
                <h3 className="h3-confia">ANOS DE EXPERIÊNCIA EM CONSULTORIA EMPRESARIAL</h3>
                <p className="p-confia">
                    Com atuação comprovada junto a pequenas e médias empresas, 
                    startups e instituições do setor público e social, a Ourbiz 
                    alia conhecimento técnico, visão estratégica e experiência 
                    local para impulsionar resultados, resolver desafios e acelerar 
                    o crescimento sustentável de quem empreende em Angola
                </p>
            </div>
            <img src={ lampadamao } alt="Imagem" className="imagem-confia"/>
        </article>
        <article className="article2-confia">
            <h2 className="h22-confia">+10</h2>
            <div className="div-confia">
                <h3 className="h32-confia">SERVIÇOS PRESTADOS A INSTITUIÇÕES DE APOIO ÀS PEQUENAS EMPRESAS</h3>
                <p className="p2-confia">
                    A OurBiz já prestou mais de 10 serviços especializados para instituições 
                    que apoiam micro, pequenas e médias empresas. Atuamos como parceiros 
                    estratégicos na missão de desenvolver e empoderar empreendedores por 
                    todo o país.
                </p>
            </div>
            <img src={ maosDadas } alt="Imagem" className="imagem-confia" />
        </article>
        <article className="article1-confia">
            <h2 className="h2-confia">+50</h2>
            <div className="div-confia">
                <h3 className="h3-confia">PEQUENAS EMPRESAS E PESSOAS FÍSICAS ATENDIDAS</h3>
                <p className="p-confia">
                    Mais de 50 pequenos negócios e empreendedores individuais 
                    já contaram com os serviços da OurBiz para tirar ideias do papel, 
                    crescer com segurança e enfrentar desafios com estratégias bem 
                    definidas. Atuamos lado a lado com quem constrói o futuro da 
                    economia local.
                </p>
            </div>
            <img src={ senhorasJuntas } alt="Imagem" className="imagem-confia" />
        </article>
    </section>
  );
}
