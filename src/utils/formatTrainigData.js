import { intervalToDuration } from "date-fns";

export const calculateTrainigDuration = (min, max) => {
  return intervalToDuration({ start: min, end: max });
};
