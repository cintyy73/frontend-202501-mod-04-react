import { useEffect, useState } from "react";

const TimerExample = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    console.log("▶️ Timer iniciado");
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      console.log("⏸️ Timer limpiado");
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <div>
      <h2>Temporizador</h2>
      <p>Segundos: {seconds}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "⏸️ Pausar" : "▶️ Reanudar"}
      </button>
      <button
       className="btn-danger"
        onClick={() => {
          setSeconds(0);
        }}
      >
        {" "}
        🔄 Reiniciar
      </button>
    </div>
  );
};

export default TimerExample;
