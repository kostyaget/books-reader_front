import { useState, useEffect } from "react";
import {
  makeMeTwoDigits,
  formatTimerDate,
} from "../../utils/formatTrainigData";
import {
  GoalContainer,
  GoalTitle,
  GoalCountdownTime,
  GoalText,
  GoalItemTime,
  GoalBackground,
} from "./ClockTest";

const ClockGoalsCountdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = formatTimerDate(new Date(new Date().getFullYear() + 1, 0));

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GoalContainer>
      <GoalTitle>Years countdown</GoalTitle>

      <GoalBackground>
        <GoalCountdownTime>{makeMeTwoDigits(days)}</GoalCountdownTime>
        <GoalCountdownTime>:</GoalCountdownTime>
        <GoalCountdownTime>{makeMeTwoDigits(hours)}</GoalCountdownTime>
        <GoalCountdownTime>:</GoalCountdownTime>
        <GoalCountdownTime>{makeMeTwoDigits(minutes)}</GoalCountdownTime>
        <GoalCountdownTime>:</GoalCountdownTime>
        <GoalCountdownTime>{makeMeTwoDigits(seconds)}</GoalCountdownTime>

        <GoalItemTime>
          <GoalText>DAYS</GoalText>
          <GoalText>HRS</GoalText>
          <GoalText>MINS</GoalText>
          <GoalText>SECS</GoalText>
        </GoalItemTime>
      </GoalBackground>
    </GoalContainer>
  );
};

export default ClockGoalsCountdown;
