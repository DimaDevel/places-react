import { useEffect, useState } from "react";

const TIMER = 3000;
const TIME_STEP = 10;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevTime) => prevTime - TIME_STEP);
    }, TIME_STEP);

    return () => {
      console.log('INTERVAL CLEANED');
      clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    console.log("TIME SET");
    const timer = setTimeout(() => onConfirm(), TIMER);

    return () => {
      console.log("TIME CLEANED");
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
