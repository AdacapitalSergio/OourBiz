// Counter.jsx
import "./Inscricao.css"; // Usaremos o mesmo CSS para manter o estilo

export default function Counter({ title, number }) {
  return (
    <div className="counter-unit">
      <div>
        <span className="counter-number">{number}</span>
        <small className="counter-text">{title}</small>
      </div>
    </div>
  );
}
