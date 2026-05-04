import React from "react";
import Banner from "../components/voluntariado/banner/Banner";
import Header from "../components/nextgen/header/Header";
import SobreFooter from "../components/sobreFooter/sobreFooter";
import Footer from "../components/footer/footer";
import MultiStepForm from "../components/voluntariado/multiStepForm/MultiStepForm";

export default function CadastroVoluntariado() {
    return (
        <>
            <Header />
            <MultiStepForm />
            <Footer />
        </>
    );
}
