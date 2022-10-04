// import {
//   useStartTrainingMutation,
//   useFetchTrainingsDataQuery,
// } from "../../redux/trainings/trainingsApi";
import { Button } from "./StartTrainingBtn.styled";

export default function StartTrainingBtn() {
  // const [addDataTraining] = useStartTrainingMutation();
  // const { data } = useFetchTrainingsDataQuery();

  const hadleClick = () => {
    // addDataTraining({
    //   startDate: "03.01.01",
    //   finishDate: "03.03.03",
    //   book: ["633c9f80179bf0fb7332efa0"],
    // });
  };

  return (
    <Button type="submit" onClick={hadleClick}>
      Start traininig
    </Button>
  );
}
