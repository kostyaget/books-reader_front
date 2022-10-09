import { useState } from "react";
import { Button } from "./ButtonResume.styled";
import Resume from "../../Modal/Resume";
// import { useDispatch } from 'react-redux';

export default function ButtonResume({ id = 1, rating = 0, summaryBook = "" }) {
  const [modalActiveResume, setModalActiveResume] = useState(false);

  const closeResumeModal = () => {
    setModalActiveResume(false);
  };

  const onClick = () => {
    setModalActiveResume(true);
  };
  // const dispatch = useDispatch();
  // const ResumeFunc = () => {
  //   dispatch();
  // };
  return (
    <>
      <Button onClick={onClick}>Resume</Button>
      {modalActiveResume && (
          <Resume id={id} ratingBook={rating} summaryBook={summaryBook} open={modalActiveResume}
          onClose={closeResumeModal}
          // ResumeFunc={ResumeFunc}
          />
      )}
    </>
  );
}
