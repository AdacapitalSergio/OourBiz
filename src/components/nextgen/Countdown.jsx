import { useEffect, useState } from "react";

export default function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();

    if (difference <= 0) {
      return null;
    }

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <p className="countdown-finished">Evento iniciado 🚀</p>;
  }

  return (
    <div className="countdown">
      <Box label="Dias" value={timeLeft.dias} />
      <Box label="Horas" value={timeLeft.horas} />
      <Box label="Min" value={timeLeft.minutos} />
      <Box label="Seg" value={timeLeft.segundos} />
    </div>
  );
}

const Box = ({ label, value }) => (
  <div className="count-box">
    <span>{value.toString().padStart(2, "0")}</span>
    <p>{label}</p>
  </div>
);
