import {
  useStartTrainingMutation,
  useFetchTrainingsDataQuery,
} from "../../redux/trainings/trainingsApi";
import { Button } from "./StartTrainingBtn.styled";

export default function StartTrainingBtn() {
  const [addDataTraining] = useStartTrainingMutation();
  console.log("useFetchTrainingsDataQuery", useFetchTrainingsDataQuery());
  const hadleClick = () => {
    addDataTraining({
      startDate: "03.01.01",
      finishDate: "03.03.03",
      book: ["bdh232435h3489574fhsj"],
    });
  };

  return (
    <Button type="submit" onClick={hadleClick}>
      Start traininig
    </Button>
  );
}
