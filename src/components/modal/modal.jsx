import React from "react";
import {FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaLock } from "react-icons/fa";
import "./estiloModal.css";

const Modal = ({ show, type, message, onClose }) => {
    if(!show) return null;

    const config = {
        sucess: { icon: <FaCheckCircle />, color: "#28a745" },
        error: { icon: <FaTimesCircle />, color: "#dc3545" },
        warning: { icon: <FaExclamationTriangle />, color: "#d6a308ff" },
        login: { icon: <FaLock />, color: "#007bff" }
    }

    const { icon, color } = config[type] || config.sucess;

    return (
        <div className="modal-overdelay">
            <div className="modal-content" style={{ borderLeft: `6px solid ${ color }` }}>
                <div className="modal-icon" style={{ color }}>
                    {icon}
                </div>
                <div className="modal-message">
                    <p>{message}</p>
                </div>
                <button className="modal-close" onClick={ onClose }>
                    Fechar
                </button>
            </div>
        </div>
    )
}

export default Modal;
