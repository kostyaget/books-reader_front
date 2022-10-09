import { format } from "date-fns";

export const formatPagesDate = (date) => {
  return format(Date.parse(date), "dd/MM/yyyy");
};

export const formatPagesTime = (date) => {
  return format(Date.parse(date), "hh:mm:ss");
};
