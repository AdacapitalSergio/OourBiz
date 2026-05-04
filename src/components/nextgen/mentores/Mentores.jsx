import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import "./Mentores.css";
import { mentores } from "../../../data/mentoresData";
import ModalMentores from "./ModalMentores";

export default function Mentores() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="palestrantes-section" id="palestrantes-nextgen">

      <h4>Palestrantes e mentores</h4>
      <h2>Aprenda com quem já está transformando negócios</h2>
      <p>
        Convidamos especialistas em inovação, gestão e tecnologia para
        compartilhar experiências reais, dicas práticas e tendências do mercado.
      </p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={"auto"}
        loop={true}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false
        }}
        freeMode={true}
        grabCursor={true}
        className="palestrantes-swiper"
      >
        {mentores.map((p, i) => (
          <SwiperSlide key={i} className="card-slide">

            <div className="card">

              <img src={p.imagem} alt={p.nome} />

              <h3>{p.nome}</h3>
              <span className="cargo">{p.cargo}</span>
              <span className="empresa">{p.empresa}</span>

              <button onClick={() => setSelected(p)}>
                Saber mais
              </button>

              {/* SOCIAL ICONS */}
              <div className="socials">
                <a href={p.social.facebook} target="_blank">
                  <FaFacebookF />
                </a>
                <a href={p.social.instagram} target="_blank">
                  <FaInstagram />
                </a>
                <a href={p.social.linkedin} target="_blank">
                  <FaLinkedinIn />
                </a>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* MODAL */}
      <ModalMentores
        open={!!selected}
        onClose={() => setSelected(null)}
        data={selected}
      />

    </section>
  );
}
