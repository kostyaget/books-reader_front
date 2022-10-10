import { Form, Formik } from "formik";
import {
  useDeleteProgressMutation,
  useUpdateIsTrainingMutation,
  useUpdateStatusMutation,
} from "../../redux/users/usersApi";
import Notiflix from "notiflix";
import {
  Backdrop,
  Rating,
  BtnColor,
  ItemBtn,
  Container,
  Svg,
} from "./BookRead.styled";
import Like from "../../images/Vector.svg";

const ExitModal = ({
  showModal,
  setShowModal,
  clearListBook,
  userId,
  data,
}) => {
  const [updateIsTraningStatus] = useUpdateIsTrainingMutation();
  const [deleteProgress] = useDeleteProgressMutation();
  const [updateStatus] = useUpdateStatusMutation();

  const IsTraningStatus = {
    id: userId,
    isTraining: false,
  };
  const handleClick = () => {
    setShowModal(!showModal);
    data.data.forEach((e) => {
      return updateStatus({
        id: e.book._id,
        status: "completed",
      });
    });
    clearListBook();
    updateIsTraningStatus(IsTraningStatus);
    deleteProgress(userId);
    Notiflix.Notify.success("Training is completed");
  };

  return (
    <Backdrop>
      <Container>
        <div>
          <Svg src={Like} alt="like" />
        </div>
        <Rating>Congratulations! Another book read.</Rating>
        <Formik>
          <Form>
            <ItemBtn>
              <BtnColor type="button" onClick={() => handleClick()}>
                Done
              </BtnColor>
            </ItemBtn>
          </Form>
        </Formik>
      </Container>
    </Backdrop>
  );
};

export default ExitModal;
