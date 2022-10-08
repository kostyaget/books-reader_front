import { useUpdateStatusMutation } from "../../redux/users/usersApi";
import { Button } from "./StartTrainingBtn.styled";

export default function StartTrainingBtn({ openStatistics, data }) {
  const [updateStatus] = useUpdateStatusMutation();
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
    <Button type="submit" onClick={hadleClick}>
      Start traininig
    </Button>
  );
}
