import { useState } from "react";
import { useUpdateResumeMutation } from "../../redux/users/usersApi";
import RatingStars from "../RatingStars/RatingStars";
// import { useDispatch } from "react-redux";
import {
  Rating,
  // RatingArea,
  Summary,
  BtnColor,
  Btn,
  ItemBtn,
  Container,
} from "./Resume.styled";
import "./Resume.css";

const Resume = ({ id, ratingBook, summaryBook = "" }) => {
  // const dispatch = useDispatch();

  // const [rating, setRating] = useState(1);
  const [summary, setSummary] = useState(summaryBook);
  const [updateResume] = useUpdateResumeMutation();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateResume({ id, summary });
  };

  const [active, setActive] = useState(true);
  const onStart = () => {
    setActive(false);
  };
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={"modal__content active"}
        onClick={(e) => e.stopPropagation()}
      >
        <Container style={active ? { display: "block" } : { display: "none" }}>
          <form onSubmit={handleSubmit}>
            <Rating>Choose rating of the book</Rating>
            <RatingStars id={id} rating={ratingBook} />
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
              <Btn type="button" onClick={onStart}>
                Back
              </Btn>
              <BtnColor type="submit">Save</BtnColor>
            </ItemBtn>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Resume;
