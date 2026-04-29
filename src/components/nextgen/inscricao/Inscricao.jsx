import { useEffect, useState } from "react";
import { toast } from "sonner";
import { enviarInscricao } from "../../../services/websiteService";
import "./Inscricao.css";

export default function Inscricao() {

    // ⏳ DATA FINAL (DEFINE AQUI)
    const targetDate = new Date("2025-05-10T23:59:59").getTime();

    const [time, setTime] = useState({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
    });

    const [form, setForm] = useState({
        nome: "",
        telefone: "",
        email: "",
        instituicao: "",
        vinculo: "",
        data_local: ""
    });

    const [loading, setLoading] = useState(false);

    // ⏱️ CONTADOR
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) return;

            setTime({
                dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
                horas: Math.floor((distance / (1000 * 60 * 60)) % 24),
                minutos: Math.floor((distance / 1000 / 60) % 60),
                segundos: Math.floor((distance / 1000) % 60)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await enviarInscricao(form);
            toast.success("Inscrição realizada com sucesso!");

            setForm({
                nome: "",
                telefone: "",
                email: "",
                instituicao: "",
                vinculo: "",
                data_local: ""
            });

        } catch (error) {
            toast.error("Erro ao enviar inscrição!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="inscricao-section">

            <div className="overlay-inscricao"></div>

            <div className="inscricao-container">

                {/* LEFT */}
                <div className="inscricao-left">

                    <span className="tag">Inscrição</span>

                    <h1>
                        Inscreva-se agora mesmo <br />
                        e garanta já a sua vaga!
                    </h1>

                    <p className="alerta">
                        Att: As vagas são limitadas
                    </p>

                    {/* CONTADOR */}
                    <div className="contador">
                        <p>Faltam</p>
                        <div className="tempo">
                            <div><span>{time.dias}</span><small>Dias</small></div>
                            <div><span>{time.horas}</span><small>Horas</small></div>
                            <div><span>{time.minutos}</span><small>Minutos</small></div>
                            <div><span>{time.segundos}</span><small>Segundos</small></div>
                        </div>
                    </div>

                </div>

                {/* RIGHT FORM */}
                <div className="form-box">

                    <h3>Formulário de inscrição</h3>

                    <form onSubmit={handleSubmit}>

                        <label>Nome completo</label>
                        <input name="nome" value={form.nome} onChange={handleChange} required />

                        <label>Telefone</label>
                        <input name="telefone" value={form.telefone} onChange={handleChange} required />

                        <label>E-mail</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required />

                        <label>Instituição de ensino</label>
                        <input name="instituicao" value={form.instituicao} onChange={handleChange} />

                        <label>Vínculo laboral</label>
                        <select name="vinculo" value={form.vinculo} onChange={handleChange}>
                            <option value="">Selecione</option>
                            <option>Estudante</option>
                            <option>Empregado</option>
                            <option>Empreendedor</option>
                        </select>

                        <label>Data e local</label>
                        <select name="data_local" value={form.data_local} onChange={handleChange}>
                            <option value="">Selecione</option>
                            <option>05 Maio - ISPI</option>
                            <option>07 Maio - ISPI</option>
                        </select>

                        <button disabled={loading}>
                            {loading ? "Enviando..." : "Confirmar inscrição"}
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
}
