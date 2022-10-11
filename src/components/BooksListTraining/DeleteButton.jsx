// import { useDispatch } from "react-redux";
import styled from "styled-components";
import deleteIc from "../../images/svg/delete.svg";
import deleteActiveIc from "../../images/svg/deleteActive.svg";
import { useDeleteTrainingBookMutation } from "../../redux/trainings/trainingsApi";
// import { useUpdateStatusMutation } from "../../redux/users/usersApi";
import Notiflix from "notiflix";

const BreakPoint = {
  mobileMin: "min-width: 320px",
  tabletMin: "min-width: 768px",
  desktopMin: "min-width: 1280px",
  mobileMax: "max-width: 767px",
};

const DeleteIco = styled.button`
  cursor: pointer;
  background-image: url(${deleteIc});
  width: 14px;
  height: 18px;
  border: 0;

  transition: background-image 150ms linear;

  &:hover,
  &:focus {
    background-image: url(${deleteActiveIc});
  }

  @media screen and (${BreakPoint.desktopMin}) {
    display: block;
    margin-left: auto;
  }
`;

export default function DeleteButton({ idTraning, idBook }) {
  // const [updateStatus] = useUpdateStatusMutation();
  const [deleteBook] = useDeleteTrainingBookMutation();
  // const newStatus = {
  //   id: idBook,
  //   status: "next",
  // };

  return (
    <DeleteIco
      type="button"
      // onClick={() => alert("Кнопка видалити тест")}

      onClick={() => {
        // updateStatus(newStatus);
        deleteBook(idTraning);
        Notiflix.Notify.success("Book Deleted Successfully");
      }}
    ></DeleteIco>
  );
}
