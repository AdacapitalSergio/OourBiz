import React from "react";
import Header from "../components/header/header";
import SobreFooter from "../components/sobreFooter/sobreFooter";
import Footer from "../components/footer/footer";
import CriarSiteBanner from "../components/criarSiteBanner/criarSiteBanner";
import FormularioWebsite from "../components/criarSiteForm/criarSiteForm";

export default function CriarSite() {

  return (
    <>
        <Header />
        <CriarSiteBanner />
        <FormularioWebsite />
        <SobreFooter />
        <Footer />
    </>
  );
}
