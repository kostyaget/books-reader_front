// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../../redux/auth/auth";
import {
  useDeleteProgressMutation,
  useUpdateIsTrainingMutation,
  useUpdateStatusMutation,
} from "../../redux/users/usersApi";
import styled from "styled-components";
import { device } from "../../components/device/device";
import Notiflix from "notiflix";
import { useFetchTrainingsDataQuery } from "../../redux/trainings/trainingsApi";

const Button = styled.button`
  display: block;
  cursor: pointer;
  height: 40px;
  margin: 20px auto;
  padding: 0 20px;

  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 1.214;

  color: #ffffff;
  background: #ff6b08;
  border: none;

  &:hover {
    background: #ff9506;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    margin: 0 auto;
  }

  @media ${device.tablet} and (max-width: 1023px) {
    /* width: 200px; */
    margin: 40px auto;
    font-size: 16px;
    line-height: 1.25;
  } ;
`;

export default function FinishTrainingBtn({ clearListBook, userId }) {
  // const user = useSelector(selectCurrentUser);
  // console.log("user", user);
  const { data } = useFetchTrainingsDataQuery();
  const [updateIsTraningStatus] = useUpdateIsTrainingMutation();
  const [deleteProgress] = useDeleteProgressMutation();
  const [updateStatus] = useUpdateStatusMutation();

  const IsTraningStatus = {
    id: userId,
    isTraining: false,
  };
  console.log(data?.data);
  const updateStatusBook = () => {
    data?.data?.forEach((e) => {
      if (e.book.status !== "completed")
        return updateStatus({
          id: e.book._id,
          status: "next",
        });
    });
  };

  return (
    <Button
      type="submit"
      onClick={() => {
        updateStatusBook();
        clearListBook();
        updateIsTraningStatus(IsTraningStatus);
        deleteProgress(userId);
        Notiflix.Notify.success("Training is completed");
      }}
    >
      Stop training
    </Button>
  );
}
