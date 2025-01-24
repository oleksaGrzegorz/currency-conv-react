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

  return <p className="clock">{time.toLocaleString()}</p>;
};

export default Clock;
