import { useState } from "react";
import Modal from "../../../modal/modal";
import { Button } from "./ButtonResume.styled";
import Resume from "../../Modal/Resume";

export default function ButtonResume({ id = 1 }) {
  const [modalActiveResume, setModalActiveResume] = useState(false);
  return (
    <>
      <Button onClick={() => setModalActiveResume(true)}>Resume</Button>
      <Modal active={modalActiveResume} setActive={setModalActiveResume}>
        <Resume />
      </Modal>
    </>
  );
}
