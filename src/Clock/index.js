import { useState, useEffect } from "react";
import { StyledClock } from "./styled";

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
    <StyledClock>
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
    </StyledClock>
  );
};

export default Clock;
