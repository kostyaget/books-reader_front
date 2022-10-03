import {
  GoalContainer,
  GoalTitle,
  GoalCountdownTime,
  GoalText,
  GoalItemTime,
  GoalBackground,
} from "./ClockTest";

const ClockGoalsCountdown = ({ days, hours, minutes, seconds }) => {
  return (
    <GoalContainer>
      <GoalTitle>Goals countdown</GoalTitle>

      <GoalBackground>
        <GoalCountdownTime>{days} 100</GoalCountdownTime>
        <GoalCountdownTime>:</GoalCountdownTime>
        <GoalCountdownTime>{hours}100</GoalCountdownTime>
        <GoalCountdownTime>:</GoalCountdownTime>
        <GoalCountdownTime>{minutes}100</GoalCountdownTime>
        <GoalCountdownTime>:</GoalCountdownTime>
        <GoalCountdownTime>{seconds}100</GoalCountdownTime>

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
