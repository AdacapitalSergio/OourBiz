import React from "react";
import Header from "../components/header/header";
import SobreFooter from "../components/sobreFooter/sobreFooter";
import Footer from "../components/footer/footer";
import PlanosBanner from "../components/planosBanner/planosBanner";
import NossosPlanos from "../components/nossosPlanos/nossosPlanos";
import Conheca2 from "../components/crieseuplanonegocio/conheca";
import QuartaSection2 from "../components/crieseuplanonegocio/crieseuPlanonegocio";

export default function Planos() {

  return (
    <>
        <Header />
        <PlanosBanner />
        <NossosPlanos />
        <Conheca2 />
        <QuartaSection2 />
        <SobreFooter />
        <Footer />
    </>
  );
}
