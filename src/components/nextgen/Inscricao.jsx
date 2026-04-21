import Countdown from "./Countdown";

export default function Inscricao() {
  return (
    <section className="inscricao">
      <div className="insc-left">
        <h2>Inscreva-se agora mesmo e garanta já a sua vaga!</h2>
        <p>Att: As vagas são limitadas</p>

        {/* 👇 CONTADOR */}
        <Countdown targetDate="2026-05-30T09:00:00" />
      </div>

      <form className="insc-form">
        <input placeholder="Nome" />
        <input placeholder="Email" />
        <button>Confirmar inscrição</button>
      </form>
    </section>
  );
}
