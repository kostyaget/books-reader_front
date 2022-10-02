// import { useDispatch } from "react-redux";
import styled from "styled-components";
import deleteIc from "../../images/svg/delete.svg";
import deleteActiveIc from "../../images/svg/deleteActive.svg";

const BreakPoint = {
  mobileMin: "min-width: 320px",
  tabletMin: "min-width: 768px",
  desktopMin: "min-width: 1280px",
  mobileMax: "max-width: 767px",
};

const DeleteIco = styled.button`
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

export default function DeleteButton({ idBook, titleBook }) {
  //   const dispatch = useDispatch();
  //   const infoDelete = { idBook, titleBook };
  return (
    <DeleteIco
      type="button"
      onClick={() => alert("Кнопка видалити тест")}
      // onClick={() => dispatch(deleteBookThunk(infoDelete))}
    ></DeleteIco>
  );
}
