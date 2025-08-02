import React from "react";
import Header from "../components/header/header";
import SobreFooter from "../components/sobreFooter/sobreFooter";
import Footer from "../components/footer/footer";
import QuemSomosBanner from "../components/quemSomosBanner/quemSomosBanner";
import QuemSomosContent from "../components/quemSomoscontent/quemSomoscontent";
import MissaoVisao from "../components/missaoVisao/missaoVisao";
import NossosProfissionais from "../components/nossosProfissionais/nossosProfissionais";
import Parceiros from "../components/parceiros/parceiros";

export default function QuemSomos() {

  return (
    <>
        <Header />
        <QuemSomosBanner />
        <QuemSomosContent />
        <MissaoVisao />
        <NossosProfissionais />
        <Parceiros />
        <SobreFooter />
        <Footer />
    </>
  );
}
