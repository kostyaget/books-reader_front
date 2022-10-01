import { Container } from "./Chart.styled";
import { Line } from "react-chartjs-2";
import { options } from "./chartOptions";
import {
  customBorder,
  customNameLine,
  customPagesValue,
} from "./chartCustomPlugins";
import { Colors } from "./Chart.styled";
import PropTypes from "prop-types";

export const PLAN_LINE_NAME = "PLAN";
export const ACT_LINE_NAME = "ACT";

function Chart({ labelsData = ["time"], planData = [0], actData = [-1] }) {
  if (!labelsData.length) {
    labelsData = ["time"];
  }
  if (!planData.length) {
    planData = [0];
  }
  if (!actData.length) {
    actData = [-1];
  }

  const data = {
    labels: labelsData,
    datasets: [
      {
        label: ACT_LINE_NAME,
        data: actData,
        borderColor: Colors.accent,
        pointBackgroundColor: Colors.accent,
        fill: false,
      },
      {
        label: PLAN_LINE_NAME,
        data: planData,
        borderColor: Colors.dark,
        pointBackgroundColor: Colors.dark,
        fill: false,
      },
    ],
  };

  return (
    <Container>
      <Line
        options={options}
        data={data}
        plugins={[customBorder, customNameLine, customPagesValue]}
      />
    </Container>
  );
}

Chart.propTypes = {
  labelsData: PropTypes.array.isRequired,
  planData: PropTypes.array.isRequired,
  actData: PropTypes.array.isRequired,
};

export default Chart;
// how to connect
// <Chart labelsData={array1} planValue={number} actData={array2} />;
