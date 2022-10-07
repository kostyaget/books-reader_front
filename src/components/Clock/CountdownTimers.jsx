import { useCountdown } from "../../hooks/useCountdown";
import s from "./CountdownTimers.module.css";
import { useTranslation } from "react-i18next";

const DateTimeDisplay = ({ value, type }) => {
  const minTwoDigits = (value) => {
    return ("0" + value).slice(-2);
  };

  return (
    <div className={s.countdown}>
      <p>{minTwoDigits(value)}</p>
      <span>{type}</span>
    </div>
  );
};

const ShowCounter = ({ header, days, hours, minutes, seconds }) => {
  const { t } = useTranslation();
  return (
    <div className={s.countdownTimer}>
      <h3>{header}</h3>
      <div className={s.showCounter}>
        <DateTimeDisplay value={days} type={t("days")} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={t("hours")} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={t("minutes")} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={t("seconds")} />
      </div>
    </div>
  );
};

const CountdownTimers = ({ targetDate }) => {
  const { t } = useTranslation();
  const [
    daysUntilNextYear,
    hoursUntilNextYear,
    minutesUntilNextYear,
    secondsUntilNextYear,
  ] = useCountdown(Date.parse(new Date(new Date().getFullYear() + 1, 0, 1)));

  const [
    daysUntilTargetDate,
    hoursUntilTargetDate,
    minutesUntilTargetDate,
    secondsUntilTargetDate,
  ] = useCountdown(targetDate);

  return (
    <div className={s.countdownTimers}>
      <ShowCounter
        header={t("Years countdown")}
        days={daysUntilNextYear}
        hours={hoursUntilNextYear}
        minutes={minutesUntilNextYear}
        seconds={secondsUntilNextYear}
      />
      {daysUntilTargetDate <= 0 &&
      hoursUntilTargetDate <= 0 &&
      minutesUntilTargetDate <= 0 &&
      secondsUntilTargetDate <= 0 ? (
        <ShowCounter
          header={t("Goals countdown")}
          days={0}
          hours={0}
          minutes={0}
          seconds={0}
        />
      ) : (
        <ShowCounter
          header={t("Goals countdown")}
          days={daysUntilTargetDate}
          hours={hoursUntilTargetDate}
          minutes={minutesUntilTargetDate}
          seconds={secondsUntilTargetDate}
        />
      )}
    </div>
  );
};

export default CountdownTimers;
