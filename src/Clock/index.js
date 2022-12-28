import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled";

const Clock = () => {
  const date = useCurrentDate();

  const formatDate = (date) => {
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

  return <StyledClock>It's {` ${formatDate(date)}`}</StyledClock>;
};

export default Clock;
