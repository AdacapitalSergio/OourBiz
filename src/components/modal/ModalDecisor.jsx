import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ModalLogin from "./modalLogin";
import ModalCompra from "./ModalCompra";

const ModalDecisor = ({ isOpen, onClose, planoSelecionado }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isOpen) return null;

    return isAuthenticated ? (
        <ModalCompra
            isOpen={isOpen}
            onClose={onClose}
            plano={planoSelecionado?.nome}
            conta="123456789"
            iban="AO06004300001234567890123"
            onConfirm={() => {
                alert("Compra confirmada!");
                onClose();
            }}
        />
    ) : (
        <ModalLogin isOpen={isOpen} onClose={onClose} />
    );
};

export default ModalDecisor;
