import ClockGoalsCountdown from "./ClockGoalsCountdown";
import ClockYearsCountdown from "./ClockYearsCountdown";
import { GoalGeneralClass } from "./ClockTest";

const ClockTimes = ({ data }) => {
  const startDates = data.data.map((e) => new Date(e.startDate));
  const finishDates = data.data.map((e) => new Date(e.finishDate));
  const minDate = new Date(Math.min(...startDates));
  const maxDate = new Date(Math.max(...finishDates));

  return (
    <GoalGeneralClass>
      <ClockYearsCountdown />
      <ClockGoalsCountdown deadline={maxDate} startDate={minDate} />
    </GoalGeneralClass>
  );
};

export default ClockTimes;
