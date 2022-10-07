// import ClockGoalsCountdown from "./ClockGoalsCountdown";
// import ClockYearsCountdown from "./ClockYearsCountdown";
import { GoalGeneralClass } from "./ClockTest";
// import { calculateTrainigDuration } from "../../utils/formatTrainigData";
import CountdownTimers from "./CountdownTimers.jsx";

const ClockTimes = ({ data }) => {
  console.log(data.data);
  // const startDates = data.data.map((e) => new Date(e.startDate));
  // const finishDates = data.data.map((e) => new Date(e.finishDate));
  // const minDate = new Date(Math.min(...startDates));
  // const maxDate = new Date(Math.max(...finishDates));
  // const spanToGoal = calculateTrainigDuration(minDate, maxDate);
  // const now = new Date();

  return (
    <GoalGeneralClass>
      <CountdownTimers />
      {/* <ClockGoalsCountdown
        days={spanToGoal.days}
        hours={spanToGoal.hours}
        minutes={spanToGoal.minutes}
        seconds={spanToGoal.seconds}
      /> */} 
    </GoalGeneralClass>
  );
};

export default ClockTimes;
