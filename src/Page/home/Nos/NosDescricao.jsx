import React from 'react'
import "./nos.css"
import Equipa from "../../../assets/equipa.png"

export const NosDescricao = () => {
  return (
    <div className='nosPrincipal'>


        <aside className='primeiro'>
            <div className="descricaoOur">
                <div className="recta"></div>
                <div className="txt">
                        <p>
                        A OurBiz <span className='tituloOur'>Consultoria de Gestão Limitada</span>, é uma sociedade privada de responsabilidade limitada, com sede no Lubango, Huíla e filial em Luanda/Angola, foi fundada no dia 5 de maio de 2015. Possui, assim, mais de 5 anos de experiência em consultoria para micros,
                        pequenas e médias empresas, instituições públicas e do terceiro sector, com foco em pequenas empresas.
                        </p>
                </div>
                <a href=""> Saiba mais sobre nós</a>
            </div>

            <div className="imgDescr">
                <div className="fundoDescr"></div>
            </div>
        </aside>

        <aside className='segundos'>
            <img className='imgDes' src={Equipa} alt="" />
        </aside>

    </div>
  )
}
