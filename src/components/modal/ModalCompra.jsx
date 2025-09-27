import React from "react";
import "./ModalCompra.css";
import { FaRegCopy } from "react-icons/fa6";

export default function ModalCompra({ isOpen, onClose, plano, conta, iban, onConfirm }) {
    if (!isOpen) return null;

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copiado: " + text);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-closec" onClick={onClose}>×</button>
                <h2 className="modal-title">Confirmar Compra</h2>

                <p className="modal-plano">
                    Plano selecionado: <strong>{plano}</strong>
                </p>

                <div className="modal-info">
                    <p>
                        <strong>Número de conta:</strong> {conta}
                        <FaRegCopy className="copy-icon" onClick={() => copyToClipboard(conta)} />
                    </p>
                    <p>
                        <strong>IBAN:</strong> {iban}
                        <FaRegCopy className="copy-icon" onClick={() => copyToClipboard(iban)} />
                    </p>
                </div>

                <button className="btn-confirm" onClick={onConfirm}>
                    Confirmar Compra
                </button>
            </div>
        </div>
    );
}
