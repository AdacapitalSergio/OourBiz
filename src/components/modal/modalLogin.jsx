import React, { useState, useContext } from "react";
import "./estiloModalLogin.css";
import { Link } from "react-router-dom";
import { loginService } from "../../services/websiteService";
import { AuthContext } from "../../context/AuthContext";

export default function ModalLogin({ isOpen, onClose }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const { login } = useContext(AuthContext);

    if (!isOpen) return null;

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const data = await loginService(email, senha);
            if (data.access_token && data.usuario) {
                login(data.usuario, data.access_token);
                onClose();
            } else {
                setError("Credenciais inválidas!");
            }
        } catch (err) {
            setError(err.message || "Erro ao efetuar login!");
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-login">
                <button className="modal-closem" onClick={onClose}>×</button>
                <hr style={{ marginTop: '1.5rem'}} />
                <h2 className="modal-title">Fazer login</h2>

                <form onSubmit={handleLogin} className="form-login">
                    <input
                        type="email"
                        placeholder="e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Palavra-passe"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />

                    {error && <p className="error-text">{error}</p>}

                    <button type="submit" className="btn-loginm">Entrar</button>

                    <p className="texto-cadastrar">
                        Não possui uma conta?{" "}
                        <Link to="/cadastrar" onClick={onClose}>
                            Cadastrar-se
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
