import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Colors } from "./Chart.styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 40,
    },
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2,
    },
    point: {
      radius: 4,
      hoverRadius: 6,
    },
  },
  plugins: {
    tooltip: {
      intersect: false,
      enabled: false,
    },
    legend: {
      display: false,
    },
    customBorder: {
      borderColor: Colors.borderLineColor,
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        color: Colors.borderLineColor,
        borderColor: Colors.borderLineColor,
        drawTicks: false,
      },
      ticks: {
        display: false,
      },
      title: {
        align: "end",
        display: true,
        text: "TIME",
        color: Colors.dark,
        font: {
          family: "Montserrat",
          size: 12,
          weight: 600,
          lineHeight: 1.25,
        },
      },
    },
    y: {
      display: true,
      grace: "10%",
      grid: {
        display: false,
        borderColor: Colors.borderLineColor,
        drawTicks: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};
