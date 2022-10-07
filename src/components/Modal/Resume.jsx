import { useState } from "react";
import { useUpdateResumeMutation } from "../../redux/users/usersApi";
import RatingStars from "../RatingStars/RatingStars";
import {
  Rating,
  // RatingArea,
  Summary,
  BtnColor,
  Btn,
  ItemBtn,
  Container,
} from "./Resume.styled";

const Resume = ({ id, ratingBook, summaryBook = "" }) => {
  // const [rating, setRating] = useState(1);
  const [summary, setSummary] = useState(summaryBook);

  const [updateResume] = useUpdateResumeMutation();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    updateResume({ id, summary });

    // reset();
  };

  // const reset = () => {
  //   setRating(1);
  //   setSummary("");
  // };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Rating>Choose rating of the book</Rating>
        <RatingStars id={id} rating={ratingBook} />
        {/* <RatingArea>
          <input
            type="radio"
            id="star-5"
            name="rating"
            value={rating}
            onChange={(e) => setRating(5)}
          />
          <label htmlFor="star-5" title="Оценка «5»"></label>
          <input
            type="radio"
            id="star-4"
            name="rating"
            value={rating}
            onChange={(e) => setRating(4)}
          />
          <label htmlFor="star-4" title="Оценка «4»"></label>
          <input
            type="radio"
            id="star-3"
            name="rating"
            value={rating}
            onChange={(e) => setRating(3)}
          />
          <label htmlFor="star-3" title="Оценка «3»"></label>
          <input
            type="radio"
            id="star-2"
            name="rating"
            value={rating}
            onChange={(e) => setRating(2)}
          />
          <label htmlFor="star-2" title="Оценка «2»"></label>
          <input
            type="radio"
            id="star-1"
            name="rating"
            value={rating}
            onChange={(e) => setRating(1)}
          />
          <label htmlFor="star-1" title="Оценка «1»"></label>
        </RatingArea> */}
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
          <Btn type="button">Back</Btn>
          <BtnColor type="submit">Save</BtnColor>
        </ItemBtn>
      </form>
    </Container>
  );
};

export default Resume;
