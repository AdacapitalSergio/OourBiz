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





import { useEffect, useState } from "react";

export default function Countdown({ targetDate }) {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate).getTime() - new Date().getTime();
        const format = (num) => String(num).padStart(2, "0");

        if (difference <= 0) {
            return {
                dias: 0,
                horas: 0,
                minutos: 0,
                segundos: 0,
            };
        }

        return {
            dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
            horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutos: Math.floor((difference / (1000 * 60)) % 60),
            segundos: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval); // MUITO IMPORTANTE
    }, [targetDate]);

    return (
        <div className="countdown-box">
            <div>
                <span>{timeLeft.dias}</span>
                <span>{format(timeLeft.horas)}</span>
                <p>Dias</p>
            </div>
            <div>
                <span>{timeLeft.horas}</span>
                <span>{format(timeLeft.horas)}</span>
                <p>Horas</p>
            </div>
            <div>
                <span>{timeLeft.minutos}</span>
                <span>{format(timeLeft.horas)}</span>
                <p>Minutos</p>
            </div>
            <div>
                <span>{timeLeft.segundos}</span>
                <span>{format(timeLeft.horas)}</span>
                <p>Segundos</p>
            </div>
        </div>
    );
}

<Countdown targetDate="2025-05-05T10:30:00" />

import { motion } from "framer-motion";

<motion.span
    key={timeLeft.segundos}
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
>
    {format(timeLeft.segundos)}
</motion.span>
