import { FaWhatsapp } from "react-icons/fa";
import "./estiloWhatsappPulse.css";

export default function WhatsappPulse() {
  const phone = "244928003757";
  const message = encodeURIComponent("Olá! Preciso de mais informações.");
  const link = `https://wa.me/${phone}?text=${message}`;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="whatsapp-pulse">
        <span className="span-fala">Olá! Fale connosco pelo WhatsApp</span>
        <FaWhatsapp size={38} color="#fff" />
    </a>
  );
}
