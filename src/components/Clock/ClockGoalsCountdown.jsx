import { useState, useEffect } from "react";
import { makeMeTwoDigits } from "../../utils/formatTrainigData";
import {
  GoalContainer,
  GoalTitle,
  GoalCountdownTime,
  GoalText,
  GoalItemTime,
  GoalBackground,
} from "./ClockTest";

const ClockYearsCountdown = ({ deadline, startDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now(startDate);
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));

    return time;
  };
  useEffect(() => {
    let interval = setInterval(() => {
      if (getTime() <= 0) {
        setRunning(false);
        clearInterval(interval);
      }
      getTime();
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GoalContainer>
        <GoalTitle>Goals countdown</GoalTitle>

        <GoalBackground>
          <GoalCountdownTime>
            {running ? makeMeTwoDigits(days) : "00"}
          </GoalCountdownTime>
          <GoalCountdownTime>:</GoalCountdownTime>
          <GoalCountdownTime>
            {running ? makeMeTwoDigits(hours) : "00"}
          </GoalCountdownTime>
          <GoalCountdownTime>:</GoalCountdownTime>
          <GoalCountdownTime>
            {running ? makeMeTwoDigits(minutes) : "00"}
          </GoalCountdownTime>
          <GoalCountdownTime>:</GoalCountdownTime>
          <GoalCountdownTime>
            {" "}
            {running ? makeMeTwoDigits(seconds) : "00"}
          </GoalCountdownTime>

          <GoalItemTime>
            <GoalText>DAYS</GoalText>
            <GoalText>HRS</GoalText>
            <GoalText>MINS</GoalText>
            <GoalText>SECS</GoalText>
          </GoalItemTime>
        </GoalBackground>
      </GoalContainer>
    </>
  );
};

export default ClockYearsCountdown;
