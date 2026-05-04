import "./Beneficios.css";
import { beneficiosVoluntariado } from "../../../data/mentoresData";
import { Check } from "lucide-react";

export default function Beneficios() {
    return (
        <section className="beneficios-section">
            <h2 className="beneficios-title">
                Aproveite os benefícios do seu voluntariado
            </h2>

            <div className="beneficios-grid">
                {beneficiosVoluntariado.map((item) => (
                    <div key={item.id} className="beneficio-card">

                        {/* BADGE */}
                        <div className="beneficio-badge">
                            {item.titulo}
                        </div>

                        {/* LISTA */}
                        <ul className="beneficio-list">
                            {item.beneficios1li.map((texto, index) => (
                                <li key={index}>
                                    <Check size={16} className="icon-check" />
                                    <span>{texto}</span>
                                </li>
                            ))}
                        </ul>

                    </div>
                ))}
            </div>
        </section>
    );
}
