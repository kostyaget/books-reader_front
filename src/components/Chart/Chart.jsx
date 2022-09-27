import { Container } from "./Chart.styled";
import { Line } from "react-chartjs-2";
import { data } from "./chartData";
import { options } from "./chartOptions";
import {
  customBorder,
  customNameLine,
  customPagesValue,
} from "./chartCustomPlugins";

function Chart() {
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

export default Chart;
