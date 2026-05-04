import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "./NewModalMentores.css";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function NewModalMentores({ open, onClose, data }) {

return (
    <section className="over-daley">
        <div className="modal">
            <button className="close-btno" onClick={onClose}>
                <X size={22} />
            </button>
            <div className="linha-modall"></div>

            <div className="modal-body">
                <div className="modal-imagee">
                    <img src={data.imagem} alt={data.nome} />
                    <div className="img-gradient"></div>
                </div>

                <div className="modal-conteudo">
                    <div className="cima-text">
                        <div>
                            <h2></h2>
                            <p></p>
                        </div>
                        <div>
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
                    <p className="modall-descricao">
                        {data.descricao}
                    </p>
                </div>
            </div>
        </div>
    </section>
);
}
