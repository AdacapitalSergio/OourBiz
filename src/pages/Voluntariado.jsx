import React from "react";
import Banner from "../components/voluntariado/banner/Banner";
import Header from "../components/nextgen/header/Header";
import SobreFooter from "../components/sobreFooter/sobreFooter";
import Footer from "../components/footer/footer";
import FacaParte from "../components/voluntariado/facaParte/FacaParte";
import Beneficios from "../components/voluntariado/beneficios/Beneficios";
import Contactos from "../components/nextgen/contactos/Contactos";
import LastBanner from "../components/voluntariado/lastBanner/LastBanner";

export default function Voluntariado() {
    return (
        <>
            <Header />
            <Banner />
            <FacaParte />
            <Beneficios />
            <Contactos />
            <LastBanner />
            <SobreFooter />
            <Footer />
        </>
    );
}
