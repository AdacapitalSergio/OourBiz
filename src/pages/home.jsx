import React from "react";
import Header from "../components/header/header";
import PrincipalBanner from "../components/principalBanner/principalBanner";
import CriaSeuSite from "../components/criaSeuSite/criaSeuSite";
import QuartaSection from "../components/quartaSection/quartaSection";
import Conheca from "../components/criaSeuSite/conheca";
import SobreFooter from "../components/sobreFooter/sobreFooter";
import PosConheca from "../components/posConheca/posConheca";
import Lucatividade from "../components/posConheca/lucatividade";
import Footer from "../components/footer/footer";
import EncontreMelhor from "../components/encontreMelhor/encontreMelhor";
import ConfieSuaEmpresa from "../components/confieSuaEmpresa/confieSuaEmpresa";
import QueFalamSobre from "../components/queFalamSobre/queFalamSobre";
import CrieSeuNegocio from "../components/crieSeuNegocio/crieSeuNegocio";
import Perguntas from "../components/perguntas/perguntas";
import ArtigosRecentes from "../components/artigosRecentes/artigosRecentes";

export default function Home() {

  return (
    <>
        <Header />
        <PrincipalBanner />
        <QuartaSection />
        <Conheca />
        <PosConheca />
        <Lucatividade />
        <EncontreMelhor />
        <ConfieSuaEmpresa />
        <QueFalamSobre />
        <CrieSeuNegocio />
        <CriaSeuSite />
        <ArtigosRecentes />
        <Perguntas />
        <SobreFooter />
        <Footer />
    </>
  );
}
