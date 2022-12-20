import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const updateClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className={"clock"}>
      It's{" "}
      {date.toLocaleString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })}
    </span>
  );
};

export default Clock;
