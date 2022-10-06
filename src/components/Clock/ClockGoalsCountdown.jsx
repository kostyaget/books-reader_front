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
        <GoalCountdownTime>{days}</GoalCountdownTime>
        <GoalCountdownTime>:</GoalCountdownTime>
        <GoalCountdownTime>{hours}</GoalCountdownTime>
        <GoalCountdownTime>:</GoalCountdownTime>
        <GoalCountdownTime>{minutes}</GoalCountdownTime>
        <GoalCountdownTime>:</GoalCountdownTime>
        <GoalCountdownTime>{seconds}</GoalCountdownTime>

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
