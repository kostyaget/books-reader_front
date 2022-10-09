// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../../redux/auth/auth";
import {
  useUpdateIsTrainingMutation,
  useUpdateStatusMutation,
} from "../../redux/users/usersApi";
import { Button } from "./StartTrainingBtn.styled";

export default function StartTrainingBtn({ openStatistics, data, userId }) {
  // const { _id } = useSelector(selectCurrentUser);
  const [updateStatus] = useUpdateStatusMutation();
  const [updateIsTraningStatus] = useUpdateIsTrainingMutation();

  const IsTraningStatus = {
    id: userId,
    isTraining: true,
  };

  const hadleClick = async () => {
    openStatistics();
    data.data.forEach((e) => {
      return updateStatus({
        id: e.book._id,
        status: "inprogress",
      });
    });
  };
  return (
    <Button
      type="submit"
      onClick={() => {
        hadleClick();
        updateIsTraningStatus(IsTraningStatus);
      }}
    >
      Start training
    </Button>
  );
}
