const mentores = [
  { nome: "Marco Real", img: "/images/mentor1.jpg" },
  { nome: "Domingos Calombola", img: "/images/mentor2.jpg" },
  { nome: "Job Miguela", img: "/images/mentor3.jpg" },
];

export default function Mentores() {
  return (
    <section className="mentores">
        <span className="tag">Palestrantes e mentores</span>
      <h2>Aprenda com quem já está transformando negócios</h2>
      <p>
        Convidamos especialistas em inovação, gestão e tecnologia para compartilhar experiências reais, dicas práticas e tendências do mercado.
      </p>

      <div className="mentores-grid">
        {mentores.map((m, i) => (
          <div className="mentor-card" key={i}>
            <img src={m.img} />
            <h3>{m.nome}</h3>
            <button>Saber mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}