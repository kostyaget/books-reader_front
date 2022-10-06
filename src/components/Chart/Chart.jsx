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
import { useFetchTrainingsDataQuery } from "../../redux/trainings/trainingsApi";
import { useFetchUserDataQuery } from "../../redux/users/usersApi";

export const PLAN_LINE_NAME = "PLAN";
export const ACT_LINE_NAME = "ACT";

function Chart() {
  const user = useFetchUserDataQuery();
  const fetch = useFetchTrainingsDataQuery();
  const OneDay = 86400000;
  let labelsData = [];
  let planData = [];
  let actData = [];
  let averageAmount = 0;
  const arrayBooks = fetch?.data?.data;
  const userProgress = user?.data?.user?.info?.progress;

  userProgress?.forEach(({ trainingDate, pagesAmount }) => {
    labelsData.push(trainingDate);
    actData.push(pagesAmount);
  });

  arrayBooks?.forEach(({ finishDate, startDate, book }) => {
    const counterDays = Number(
      (Date.parse(finishDate) - Date.parse(startDate)) / OneDay
    );
    // console.log("Кількість днів", counterDays);
    const counterPages = Math.round(book.pageAmount / counterDays);
    // console.log("К-ть сторінок/д", counterPages);
    return (averageAmount += counterPages);
  });

  for (let i = 0; i < labelsData.length; i += 1) {
    planData.push(averageAmount);
  }

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
        label: PLAN_LINE_NAME,
        data: planData,
        borderColor: Colors.dark,
        pointBackgroundColor: Colors.dark,
        fill: false,
      },
      {
        label: ACT_LINE_NAME,
        data: actData,
        borderColor: Colors.accent,
        pointBackgroundColor: Colors.accent,
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
  labelsData: PropTypes.array,
  planData: PropTypes.array,
  actData: PropTypes.array,
};

export default Chart;
