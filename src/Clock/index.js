import { useEffect } from "react";
import "./style.css";
import { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="clock">
      {time.toLocaleString("pl", {
        weekday: "long",
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })}
    </p>
  );
};

export default Clock;
