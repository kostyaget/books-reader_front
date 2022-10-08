import { useState } from "react";
// import Modal from "../../../modal/modal";
import { Button } from "./ButtonResume.styled";
import Resume from "../../Modal/Resume";

export default function ButtonResume({ id = 1, rating = 0, summaryBook = "" }) {
  const [modalState, setModalState] = useState(false);
  const toggleModal = () => {
    setModalState((state) => !state);
  };
  // const onStart = () => {
  //   setModalState(true);
  // };
  return (
    <>
      <Button onClick={() => toggleModal()}>Resume</Button>

      {modalState && (
        <Resume
          id={id}
          ratingBook={rating}
          summaryBook={summaryBook}
          onClose={toggleModal}
        ></Resume>
      )}
    </>
  );
}
