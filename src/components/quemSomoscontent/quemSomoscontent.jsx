import React from 'react';
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import "./estiloQuemSomoscontent.css";

const QuemSomosContent = () => {
  return (
    <main className="main-quemsoomosconten">
        <h1 className='h1-quemsoomosconten'>Quem Somos</h1>
        <section className='section-quemsoomosconten'>
            <article className='article-quemsoomosconten'>
                <p className='p-quemsoomosconten'>
                    A OurBiz Consultoria de Gestão Limitada é uma sociedade privada 
                    de responsabilidade limitada, com sede na cidade do Lubango, província 
                    da Huíla, e filial na capital do país, Luanda. Fundada a 5 de maio de 
                    2015, a Ourbiz nasceu da visão de apoiar o fortalecimento do ecossistema 
                    empresarial angolano, oferecendo soluções práticas e estratégicas para o 
                    crescimento sustentável de micro, pequenas e médias empresas.
                </p>

                <p className='p-quemsoomosconten'>
                    Com mais de 5 anos de experiência, a Ourbiz tem atuado com excelência junto 
                    a empreendedores, instituições públicas e organizações do terceiro setor, 
                    prestando serviços que vão desde o diagnóstico empresarial até ao desenvolvimento 
                    de estratégias de crescimento e expansão. A nossa abordagem é orientada por 
                    resultados, com foco na valorização das potencialidades locais e na criação 
                    de negócios sólidos e escaláveis.
                </p>

                <p className='p-quemsoomosconten'>
                    Para além da consultoria tradicional, a Ourbiz tem vindo a ampliar sua atuação 
                    com foco no universo das startups e na promoção da cultura empreendedora em Angola. 
                    Desenvolvemos programas de ideação, incubação e aceleração de negócios inovadores, 
                    bem como eventos de formação, conferências e workshops que promovem o intercâmbio 
                    de conhecimento entre empreendedores, investidores e especialistas.
                </p>

            </article>
            <article className='article2-quemsoomosconten'>

            </article>
        </section>
    </main>
  );
};

export default QuemSomosContent;
