import React from "react";
import Header from "../components/nextgen/header/Header";
import Banner from "../components/nextgen/banner/Banner";
import Sobre from "../components/nextgen/sobre/Sobre";
import Mentores from "../components/nextgen/mentores/Mentores";
import Programacao from "../components/nextgen/programacao/Programacao";
import Locais from "../components/nextgen/locais/Locais";
import Eventos from "../components/nextgen/eventos/Eventos";
import Voluntariado from "../components/nextgen/voluntariado/Voluntariado";
import Contactos from "../components/nextgen/contactos/Contactos";
import Inscricao from "../components/nextgen/inscricao/Inscricao";
import SobreFooter from "../components/sobreFooter/sobreFooter";
import Footer from "../components/footer/footer";

export default function NextGen() {
    return (
        <>
            <Header />
            <Banner />
            <Sobre />
            <Mentores />
            <Programacao />
            <Locais />
            <Eventos />
            <Voluntariado />
            <Contactos />
            <Inscricao />
            <SobreFooter />
            <Footer />
        </>
    );
}
