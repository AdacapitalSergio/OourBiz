import { useEffect, useState } from "react";
import { toast } from "sonner";
import { enviarInscricao } from "../../../services/websiteService";
import Counter from "./Counter"; // Importando o componente que criamos
import "./Inscricao.css";

export default function Inscricao() {
    // 🗓️ DATA ALVO: Ajustada para 2026 para o contador ter o que contar
    const targetDate = new Date("2026-05-08T23:59:59").getTime();

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

    // ⏱️ LÓGICA DO CONTADOR (Baseada no vídeo)
    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) return; // Se a data passou, não faz nada

            // Matemática exata para converter milissegundos
            const d = Math.floor(distance / (1000 * 60 * 60 * 24));
            const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((distance % (1000 * 60)) / 1000);

            setTime({ dias: d, horas: h, minutos: m, segundos: s });
        };

        // Roda uma vez logo no início
        updateCountdown();

        // Cria o intervalo de 1 segundo
        const interval = setInterval(updateCountdown, 1000);

        // Limpa o intervalo ao sair da página
        return () => clearInterval(interval);
    }, [targetDate]);

    // Handlers do formulário permanecem iguais
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await enviarInscricao(form);
            toast.success("Inscrição realizada com sucesso, entraremos em contacto!");

            setForm({
                nome: "",
                telefone: "",
                email: "",
                instituicao: "",
                vinculo: "",
                data_local: ""
            });

        } catch (error) {
            console.log(error.response?.data);
            toast.error("Erro ao enviar inscrição, tente mais tarde!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="inscricao-section" id="inscricao-nextgen">
            <div className="overlay-inscricao"></div>
            <div className="inscricao-container">
                
                <div className="inscricao-left">
                    <span className="tag">Inscrição</span>
                    <h1>Inscreva-se agora mesmo <br /> e garanta já a sua vaga!</h1>
                    <p className="alerta">Att: As vagas são limitadas</p>

                    {/* CONTADOR CHAMANDO O COMPONENTE COUNTER */}
                    <div className="contador">
                        <p>Faltam</p>
                        <div className="tempo">
                            <Counter title="Dias" number={time.dias} />
                            <Counter title="Horas" number={String(time.horas).padStart(2, '0')} />
                            <Counter title="Minutos" number={String(time.minutos).padStart(2, '0')} />
                            <Counter title="Segundos" number={String(time.segundos).padStart(2, '0')} />
                        </div>
                    </div>
                </div>

                <div className="form-box">
                    <h3>Formulário de inscrição</h3>
                    <form onSubmit={handleSubmit}>

                        <label>Nome completo</label>
                        <input name="nome" value={form.nome} onChange={handleChange} placeholder="Digite seu nome..." required />

                        <label>Telefone</label>
                        <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="Digite seu telefone..." required />

                        <label>E-mail</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Digite seu e-mail..." required />

                        <label>Instituição de ensino</label>
                        <input name="instituicao" value={form.instituicao} onChange={handleChange} placeholder="Digite a instituição de ensino..." />

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
