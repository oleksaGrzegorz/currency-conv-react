import useCurrentDate from "./useCurrentDate";
import { ClockWithDate } from "./styled";

const formattedDate = (date) => date.toLocaleString("pl", {
  weekday: "long",
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

const Clock = () => {
  const date = useCurrentDate();

  return (
    <ClockWithDate>
      {formattedDate(date)}
    </ClockWithDate>
  );
};

export default Clock;
