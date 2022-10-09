import React from "react";
import { useFetchTrainingsDataQuery } from "../../redux/trainings/trainingsApi";
import { calculateTrainigDuration } from "../../utils/formatTrainigData";
import {
  Goal,
  ResultItem,
  Number,
  RoomArea,
  TextNumber,
  TextTitle,
  Container,
  ListNumbers,
} from "./WithoutBooks.styled";

const WithoutBooks = () => {
  const { data } = useFetchTrainingsDataQuery();
  let date = 0;
  if (data?.data.length > 0) {
    const startDates = data?.data.map((e) => new Date(e.startDate));
    const finishDates = data?.data.map((e) => new Date(e.finishDate));
    const minDate = new Date(Math.min(...startDates));
    const maxDate = new Date(Math.max(...finishDates));
    const { days } = calculateTrainigDuration(minDate, maxDate);
    date = days;
  }

  return (
    <Container>
      <Goal>
        <TextTitle>My goals</TextTitle>
      </Goal>
      <ResultItem>
        <ListNumbers>
          <RoomArea>
            <Number>{data?.data.length > 0 ? data?.data.length : "0"}</Number>
          </RoomArea>
          <TextNumber>Amount of books</TextNumber>
        </ListNumbers>

        <ListNumbers>
          <RoomArea>
            <Number>{data?.data.length > 0 ? date : "0"}</Number>
          </RoomArea>
          <TextNumber>Amount of days</TextNumber>
        </ListNumbers>
      </ResultItem>
    </Container>
  );
};

export default WithoutBooks;
