import React from "react";
import Header from "../components/header/header";
import SobreFooter from "../components/sobreFooter/sobreFooter";
import Footer from "../components/footer/footer";
import ServicoBanner from "../components/servicosBanner/servicosBanner";
import EncontreMelhorServico from "../components/encontreMelhorServico/encontreMelhorServico";
import QuartaSection from "../components/quartaSection/quartaSection";
import CriaSeuSite from "../components/criaSeuSite/criaSeuSite";

export default function Servicos() {

  return (
    <>
        <Header />
        <ServicoBanner />
        <EncontreMelhorServico />
        <QuartaSection />
        <SobreFooter />
        <Footer />
    </>
  );
}
