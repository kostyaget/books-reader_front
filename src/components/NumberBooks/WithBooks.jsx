import React from "react";
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
  NumberColor,
} from "./WithBooks.styled";

const WithBooks = ({ data }) => {
  const startDates = data.data.map((e) => new Date(e.startDate));
  const finishDates = data.data.map((e) => new Date(e.finishDate));
  const minDate = new Date(Math.min(...startDates));
  const maxDate = new Date(Math.max(...finishDates));
  const { days } = calculateTrainigDuration(minDate, maxDate);

  return (
    <Container>
      <Goal>
        <TextTitle>My goals</TextTitle>
      </Goal>

      <ResultItem>
        <ListNumbers>
          <RoomArea>
            <Number>{data.data.length}</Number>
          </RoomArea>
          <TextNumber>Amount of books</TextNumber>
        </ListNumbers>

        <ListNumbers>
          <RoomArea>
            <Number>{days}</Number>
          </RoomArea>
          <TextNumber>Amount of days</TextNumber>
        </ListNumbers>

        <ListNumbers>
          <RoomArea>
            <NumberColor>{data.data.length}</NumberColor>
          </RoomArea>
          <TextNumber>Books left</TextNumber>
        </ListNumbers>
      </ResultItem>
    </Container>
  );
};

export default WithBooks;
