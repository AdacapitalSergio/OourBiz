import React from "react";
import SubHeader from "../components/dashBoardCliente/subHeader/subHeader";
import Footer from "../components/footer/footer";
import SobreFooter from "../components/sobreFooter/sobreFooter";
import Header from "../components/header/header";
import MenuCliente from "../components/dashBoardCliente/menuCliente/menuCliente";
import Dashboard from "../components/dashBoardCliente/dashoard/Dashboard";
import MeuPerfil from "../components/dashBoardCliente/meuPerfil/meuperfil";


export default function PerfilCliente() {

  return (
    <>
        <Header />
        <SubHeader />
        <MenuCliente />
        <MeuPerfil />
        <SobreFooter />
        <Footer />
    </>
  );
}
