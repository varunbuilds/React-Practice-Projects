import { useState, useEffect, use } from "react";
import Typography from "@mui/material/Typography";
import TimerIcon from "@mui/icons-material/Timer";
import Button from "@mui/material/Button";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <div className="flex justify-center contain gap-2 p-4">
        <TimerIcon style={{ fontSize: 40 }} />
        <Typography variant="h4" gutterBottom>
          Stopwatch
        </Typography>
      </div>
      <div className="flex flex-col justify-center items-center min-h-40">
        <Typography variant="h4" gutterBottom>
          <span>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + (Math.floor(time / 10) % 100)).slice(-2)}</span>
        </Typography>
        <div className="flex gap-2 flex-wrap">
          {running ? (
            <Button variant="outlined" onClick={() => setRunning(false)}>
              Stop
            </Button>
          ) : (
            <Button variant="outlined" onClick={() => setRunning(true)}>
              Start
            </Button>
          )}

          <Button variant="outlined" onClick={() => setTime(0)}>
            Reset
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
