import "./style.css";
import useCurrentDate from "./useCurrentDate";

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
    <p className="clock">
      {formattedDate(date)}
    </p>
  );
};

export default Clock;
