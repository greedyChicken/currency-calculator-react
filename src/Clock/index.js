import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled";

const Clock = () => {
  const date = useCurrentDate();

  return <StyledClock>It's {` ${date}`}</StyledClock>;
};

export default Clock;
