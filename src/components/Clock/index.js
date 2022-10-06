import ClockGoalsCountdown from "./ClockGoalsCountdown";
import ClockYearsCountdown from "./ClockYearsCountdown";
import { GoalGeneralClass } from "./ClockTest";
import { calculateTrainigDuration } from "../../utils/formatTrainigData";

const ClockTimes = ({ data }) => {
  console.log(data.data);
  const startDates = data.data.map((e) => new Date(e.startDate));
  const finishDates = data.data.map((e) => new Date(e.finishDate));
  const minDate = new Date(Math.min(...startDates));
  const maxDate = new Date(Math.max(...finishDates));
  const spanToGoal = calculateTrainigDuration(minDate, maxDate);
  const now = new Date();
  const spanToYear = calculateTrainigDuration(
    now,
    new Date(now.getFullYear() + 1, 0)
  );

  return (
    <GoalGeneralClass>
      <ClockGoalsCountdown
        days={spanToGoal.days}
        hours={spanToGoal.hours}
        minutes={spanToGoal.minutes}
        seconds={spanToGoal.seconds}
      />
      <ClockYearsCountdown
        days={spanToYear.days}
        hours={spanToYear.hours}
        minutes={spanToYear.minutes}
        seconds={spanToYear.seconds}
      />
    </GoalGeneralClass>
  );
};

export default ClockTimes;
