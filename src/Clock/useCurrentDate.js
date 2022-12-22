import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());

  const updateClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return date.toLocaleString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};
