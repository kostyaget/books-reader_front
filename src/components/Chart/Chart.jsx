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

export const PLAN_LINE_NAME = "ПЛАН";
export const ACT_LINE_NAME = "ФАКТ";

function Chart({ labelsData = ["time"], planValue = 0, actData = [-1] }) {
  let planArray = [];
  for (let i = 0; i < actData.length; i += 1) {
    planArray.push(planValue);
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
        data: planArray,
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
  planValue: PropTypes.number.isRequired,
  actData: PropTypes.array.isRequired,
};

export default Chart;
// how to connect
// <Chart labelsData={array1} planValue={number} actData={array2} />;
