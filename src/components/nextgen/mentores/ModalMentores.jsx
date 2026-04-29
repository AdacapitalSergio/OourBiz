/*import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "./ModalMentores.css";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ModalMentores({ open, onClose, data }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-overlayd"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-contentt"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button className="close-btno" onClick={onClose}>
              <X />
            </button>
            <div className="linha-modall"></div>

            <div className="modal-bodyy">

              <div className="modal-imagee">
                <img src={data.imagem} alt={data.nome} />
              </div>

              <div className="modal-texto">
                <article className="modal-article">
                  <div className="modal-header">
                    <h2>{data.nome}</h2>
                    <p className="p-modal">{data.cargo}, {data.empresa}</p>
                  </div>

                  <div className="modall-info">
                    <div className="modall-socials">
                      <a href={data.social.facebook} target="_blank">
                        <FaFacebook />
                      </a>
                      <a href={data.social.instagram} target="_blank">
                        <FaInstagram />
                      </a>
                      <a href={data.social.linkedin} target="_blank">
                        <FaLinkedinIn />
                      </a>
                    </div>
                    <span className="modal-email">{data.email}</span>
                  </div>
                </article>

                <p className="modall-descricao">{data.descricao}</p>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}*/

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "./ModalMentores.css";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ModalMentores({ open, onClose, data }) {

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-overlayd"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.4 }}
        >

          <motion.div
            className="modal-contentt"
            initial={{ y: 80, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 80, scale: 0.95, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14
            }}
          >

            {/* CLOSE */}
            <button className="close-btno" onClick={onClose}>
              <X size={18} />
            </button>

            {/* LINHA SUPERIOR */}
            <div className="linha-modall"></div>

            <div className="modal-bodyy">

              {/* IMAGEM */}
              <div className="modal-imagee">
                <img src={data.imagem} alt={data.nome} />
                <div className="img-gradient"></div>
              </div>

              {/* TEXTO */}
              <div className="modal-texto">

                {/* HEADER LINHA */}
                <div className="top-row">

                  {/* LEFT */}
                  <div className="left-info">
                    <h2>{data.nome}</h2>
                    <p className="p-modal">
                      {data.cargo}, {data.empresa}
                    </p>
                  </div>

                  {/* RIGHT */}
                  <div className="right-info">
                    <div className="modall-socials">
                      <a href={data.social.facebook} target="_blank">
                        <FaFacebook />
                      </a>
                      <a href={data.social.instagram} target="_blank">
                        <FaInstagram />
                      </a>
                      <a href={data.social.linkedin} target="_blank">
                        <FaLinkedinIn />
                      </a>
                    </div>

                    <span className="modal-email">{data.email}</span>
                  </div>

                </div>

                {/* DESCRIÇÃO */}
                <p className="modall-descricao">
                  {data.descricao}
                </p>

                {/* FOOTER */}
                <div className="modal-footer">
                  <div className="dots">
                    {[...Array(6)].map((_, i) => (
                      <span key={i}></span>
                    ))}
                  </div>

                  <div className="controls">
                    <button><ChevronLeft size={16} /></button>
                    <button><ChevronRight size={16} /></button>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
