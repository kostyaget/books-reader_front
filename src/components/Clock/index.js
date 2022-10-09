import ClockGoalsCountdown from "./ClockGoalsCountdown";
import ClockYearsCountdown from "./ClockYearsCountdown";
import { GoalGeneralClass } from "./ClockTest";
import { getDate, getSeconds } from "date-fns";

const ClockTimes = ({ data }) => {
  const startDates = data.data.map((e) => new Date(e.startDate));
  const finishDates = data.data.map((e) => new Date(e.finishDate));
  const minDate = new Date(Math.min(...startDates));
  const maxDate = new Date(Math.max(...finishDates));
  maxDate.setDate(getDate(maxDate) + 1);
  maxDate.setSeconds(getSeconds(maxDate) - 1);
  return (
    <GoalGeneralClass>
      <ClockYearsCountdown />
      <ClockGoalsCountdown deadline={maxDate} startDate={minDate} />
    </GoalGeneralClass>
  );
};

export default ClockTimes;
