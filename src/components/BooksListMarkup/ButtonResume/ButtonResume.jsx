import { useState } from "react";
import Modal from "../../../modal/modal";
import { Button } from "./ButtonResume.styled";
import Resume from "../../Modal/Resume";

export default function ButtonResume({ id = 1, rating = 0, summaryBook = "" }) {
  const [modalActiveResume, setModalActiveResume] = useState(false);
  return (
    <>
      <Button onClick={() => setModalActiveResume(true)}>Resume</Button>
      <Modal active={modalActiveResume} setActive={setModalActiveResume}>
        <Resume id={id} ratingBook={rating} summaryBook={summaryBook} />
      </Modal>
    </>
  );
}
