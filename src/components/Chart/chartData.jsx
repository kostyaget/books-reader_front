import { Colors } from "./Chart.styled";
export const PLAN_LINE_NAME = "ПЛАН";
export const ACT_LINE_NAME = "ФАКТ";

const dataTrue = true;

const labelsData = ["a", "b", "c", "d", "e", "f"];
const planData = [3, 3, 3, 3, 3, 3];
const actData = [6, 5, 6, -2, 4, 5];

const planLineData = dataTrue ? planData : [0];
const actLineData = dataTrue ? actData : [-1];

const labels = dataTrue ? labelsData : ["zero"];

export const data = {
  labels,
  datasets: [
    {
      label: ACT_LINE_NAME,
      data: actLineData,
      borderColor: Colors.accent,
      pointBackgroundColor: Colors.accent,
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: false,
    },
    {
      label: PLAN_LINE_NAME,
      data: planLineData,
      borderColor: Colors.dark,
      pointBackgroundColor: Colors.dark,
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: false,
    },
  ],
};
