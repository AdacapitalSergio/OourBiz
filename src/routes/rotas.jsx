import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Servicos from '../pages/servicos';
import QuemSomos from '../pages/quemSomos';
import Planos from '../pages/planos';
import Contactar from '../pages/contactar';
import Cadastrar from '../pages/cadastrar';
import Login from '../pages/login';
import CriarSite from '../pages/criarSite';

function Rotas() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/servicos' element={ <Servicos /> } />
          <Route path='/planos' element={ <Planos /> } />
          <Route path='/quemsomos' element={ <QuemSomos /> } />
          <Route path='/contactar' element={ <Contactar /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/cadastrar' element={ <Cadastrar /> } />
          <Route path='/criarsite' element={ <CriarSite /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rotas;