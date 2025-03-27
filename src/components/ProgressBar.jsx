import { useState, useEffect } from "react";

const TIME_STEP = 10;

export default function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevTime) => prevTime - TIME_STEP);
    }, TIME_STEP);

    return () => {
      console.log("INTERVAL CLEANED");
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
