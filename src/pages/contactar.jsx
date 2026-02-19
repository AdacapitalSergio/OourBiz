import React from "react";
import Header from "../components/header/header";
import SobreFooter from "../components/sobreFooter/sobreFooter";
import Footer from "../components/footer/footer";
import ContactarBanner from "../components/contactarBanner/contactarBanner";
import NossosContactos from "../components/nossosContactos/nossosContactos";
import ContactForm from "../components/contactForm/ContactForm";
import WhatsappPulse from "../components/whatsApp/WhatsappPulse";

export default function Contactar() {

  return (
    <>
        <Header />
        <ContactarBanner />
        <NossosContactos />
        <ContactForm />
        <SobreFooter />
        <Footer />
        <WhatsappPulse />
    </>
  );
}
