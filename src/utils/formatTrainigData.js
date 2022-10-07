import { format, intervalToDuration } from "date-fns";

export const calculateTrainigDuration = (min, max) => {
  return intervalToDuration({ start: min, end: max });
};

export const formatTimerDate = (date) => {
  return format(Date.parse(date), "MMMM, d, yyyy");
};

export const makeMeTwoDigits = (n) => {
  return (n < 10 ? "0" : "") + n;
};
