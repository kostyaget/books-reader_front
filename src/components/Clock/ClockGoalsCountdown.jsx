import { useCountdown } from '../../hooks/useCountdown';
import { useTranslation } from 'react-i18next';
import {
  GoalContainer,
  GoalTitle,
  GoalCountdownTime,
  GoalText,
  GoalItemTime,
  GoalBackground,
} from "./ClockTest";

const ClockGoalsCountdown = ({ header, days, hours, minutes, seconds }) => {
  const { t } = useTranslation();
  return (
    <GoalContainer>
       <GoalTitle>{header}</GoalTitle>
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
