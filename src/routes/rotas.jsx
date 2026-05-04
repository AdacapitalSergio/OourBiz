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
import DashboardCliente from '../pages/dashboardCliente';
import PerfilCliente from '../pages/perfilCliente';
import CardVagas from '../pages/newVagas/CardVagas';
import DetalhesVaga from '../pages/newVagas/DetalhesVagas';
import NextGen from '../pages/NextGen';
import Voluntariado from '../pages/Voluntariado';
import CadastroVoluntariado from '../pages/CadastroVoluntariado';

function Rotas() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/servicos' element={ <Servicos /> } />
          <Route path='/nextgen' element={ <NextGen /> } />
          <Route path='/voluntariado' element={ <Voluntariado /> } />
          <Route path='/candidatar-voluntariado' element={ <CadastroVoluntariado /> } />
          {/* <Route path='/planos' element={ <Planos /> } /> */}
          <Route path='/quemsomos' element={ <QuemSomos /> } />
          <Route path='/contactar' element={ <Contactar /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/cadastrar' element={ <Cadastrar /> } />
          {/* <Route path='/criarsite' element={ <CriarSite /> } /> */}
          {/* <Route path="/planos/:servicoId" element={<Planos />} /> */}
          <Route path="/servicos/:servicoId" element={<Servicos />} />
          <Route path="/vagas" element={<CardVagas />} />
          <Route path="/detalhesvagas/:vagaId" element={<DetalhesVaga />} />

          <Route path='/dashboard-cliente' element={ <DashboardCliente /> } />
          <Route path='/perfil-cliente' element={ <PerfilCliente /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rotas;
