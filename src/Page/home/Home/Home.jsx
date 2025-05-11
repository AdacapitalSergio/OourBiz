import React from 'react'
import { Head } from '../../../componentes/head/Head'
import { Inicio } from '../Inicio/inicio'
import { Criar } from '../criarSite/Criar'
import { NosDescricao } from '../Nos/NosDescricao'
import { Consultoria } from '../consultoria/Consultoria'

export const Home = () => {
  return (
    <div>
      <Head/>
      <Inicio/>
      <Criar/>
      <Consultoria/>
      
    </div>
  )
}
