import { useState } from "react";
import { useUpdateResumeMutation } from "../../redux/users/usersApi";
import RatingStars from "../RatingStars/RatingStars";
import "./Resume.css";
import {
  Rating,
  Summary,
  BtnColor,
  Btn,
  ItemBtn,
  Container,
  RatingStarss,
} from "./Resume.styled";
import "./Resume.css";

const Resume = ({
  id,
  ratingBook,
  summaryBook = "",
  open,
  onClose,
  ResumeFunc,
}) => {
  const [summary, setSummary] = useState(summaryBook);
  const [updateResume] = useUpdateResumeMutation();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTimeout(() => {
      onClose();
    }, 200);

    updateResume({ id, summary });
  };
  return (
    <div className={open ? "modal active" : "modal"} onClick={onClose}>
      <div
        className={open ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <Container open={open} onClose={onClose}>
          <form onSubmit={handleSubmit}>
            <Rating>Choose rating of the book</Rating>
            <RatingStarss>
              <RatingStars id={id} rating={ratingBook} />
            </RatingStarss>

            <Rating htmlFor="resume">Resume</Rating>
            <Summary
              type="text"
              name="text"
              placeholder="..."
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
            <ItemBtn>
              <Btn type="button" onClick={onClose}>
                Back
              </Btn>
              <BtnColor
                type="submit"
                // onClick={ResumeFunc}
                // onClick={onClose}
              >
                Save
              </BtnColor>
            </ItemBtn>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Resume;
