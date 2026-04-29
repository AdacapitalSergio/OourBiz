import { useRef, useState } from "react";
import { eventos } from "../../../data/mentoresData";
import { CalendarDays, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Eventos.css";

export default function Eventos() {

    const containerRef = useRef(null);
    const [index, setIndex] = useState(0);

    const scroll = (direction) => {
        const container = containerRef.current;
        const cardWidth = container.firstChild.offsetWidth + 20;

        if (direction === "next") {
            container.scrollBy({ left: cardWidth, behavior: "smooth" });
            setIndex((prev) => Math.min(prev + 1, eventos.length - 1));
        } else {
            container.scrollBy({ left: -cardWidth, behavior: "smooth" });
            setIndex((prev) => Math.max(prev - 1, 0));
        }
    };

    return (
        <section className="eventos-section">

            <h4 className="subtitulo">Datas e locais</h4>
            <h2 className="titulo">Onde e quando vai acontecer?</h2>

            <div className="carousel-wrapper">

                <div className="carousel" ref={containerRef}>
                    {eventos.map((evento) => (
                        <div className="card-evento" key={evento.id}>

                            <img src={evento.imagem} className="mapa" />

                            <div className="card-body">

                                <div className="info-left">
                                    <CalendarDays size={20} color="#ff007a" />
                                    <div>
                                        <p className="data">{evento.data}</p>
                                        <p>{evento.hora}</p>
                                        <span><b>Duração:</b> {evento.duracao}</span>

                                        <div className="socials">
                                            <span>Transmissão online:</span>
                                            <FaFacebook size={16} />
                                            <FaInstagram size={16} />
                                        </div>
                                    </div>
                                </div>

                                <div className="info-right">
                                    <MapPin size={20} color="#ff007a" />
                                    <div>
                                        <p className="local">{evento.local}</p>
                                        <span>{evento.cidade}</span>

                                        <p className="palestrante">
                                            <strong>Palestrante:</strong> {evento.palestrante}
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <button className="btn-inscrever">
                                Inscrever-se
                            </button>

                        </div>
                    ))}
                </div>

                {/* CONTROLES */}
                <div className="controls">
                    <button onClick={() => scroll("prev")}>
                        <ChevronLeft />
                    </button>
                    <button onClick={() => scroll("next")}>
                        <ChevronRight />
                    </button>
                </div>

                {/* DOTS */}
                <div className="dots">
                    {eventos.map((_, i) => (
                        <span key={i} className={i === index ? "active" : ""}></span>
                    ))}
                </div>

            </div>
        </section>
    );
}