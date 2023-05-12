import {useEffect, useState} from "react";

const TARGET_SIZE = "10vmin";

function App() {
  const [status, setStatus] = useState<"initial" | "playing" | "finished">("initial");
  const [timer, setTimer] = useState<number>(0);
  const [position, setPosition] = useState<[number, number]>([
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
  ]);

  const [score, setScore] = useState<number>(0);

  const _handleClick = () => {
    setScore((prevScore) => prevScore + 1);
    if (score === 9) {
      setStatus("finished");
      setScore(0);
    }
    setPosition([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
  };

  useEffect(() => {
    let interval: number;

    if (status === "playing") {
      interval = setInterval(() => setTimer((prevTimer) => prevTimer + 1), 100);
    }

    return () => clearInterval(interval);
  }, [status]);

  return (
    <main>
      <header>
        <h1>{Math.round((timer / 10) * 100) / 100} segundos</h1>
      </header>
      <section style={{position: "relative", marginRight: TARGET_SIZE, marginBottom: TARGET_SIZE}}>
        {status === "playing" && (
          <figure
            style={{
              width: TARGET_SIZE,
              height: TARGET_SIZE,
              transform: `scale(${1 - score * 0.05})`,
              position: "absolute",
              top: `${position[0]}%`,
              left: `${position[1]}%`,
            }}
            onClick={_handleClick}
          />
        )}
      </section>
      <footer>
        {status === "initial" && <button onClick={() => setStatus("playing")}>Empezar</button>}
        {status === "playing" && <button onClick={() => setStatus("finished")}>Terminar</button>}
        {status === "finished" && <button onClick={() => setStatus("initial")}>Reiniciar</button>}
      </footer>
    </main>
  );
}

export default App;
