import React from "react";
import Header from "../components/header/header";
import SobreFooter from "../components/sobreFooter/sobreFooter";
import Footer from "../components/footer/footer";
import PlanosBanner from "../components/planosBanner/planosBanner";
import NossosPlanos from "../components/nossosPlanos/nossosPlanos";
import Conheca2 from "../components/crieseuplanonegocio/conheca";
import QuartaSection2 from "../components/crieseuplanonegocio/crieseuPlanonegocio";
import Conheca from "../components/criaSeuSite/conheca";
import WhatsappPulse from "../components/whatsApp/WhatsappPulse";
import CrieSeuNegocio from "../components/crieSeuNegocio/crieSeuNegocio";

export default function Planos() {

  return (
    <>
        <Header />
        <PlanosBanner />
        <NossosPlanos />
        <Conheca titulo="Crie o seu plano de negócio, agora!" />
        <CrieSeuNegocio />
        <SobreFooter />
        <Footer />
        <WhatsappPulse />
    </>
  );
}
