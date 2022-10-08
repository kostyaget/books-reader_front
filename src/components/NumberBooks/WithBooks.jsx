import React from "react";
import { calculateTrainigDuration } from "../../utils/formatTrainigData";
import { useFetchUserDataQuery } from "../../redux/users/usersApi";
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
  const user = useFetchUserDataQuery();
  const startDates = data.data.map((e) => new Date(e.startDate));
  const finishDates = data.data.map((e) => new Date(e.finishDate));
  const minDate = new Date(Math.min(...startDates));
  const maxDate = new Date(Math.max(...finishDates));
  const { days } = calculateTrainigDuration(minDate, maxDate);
  const traningBooksArray = user.data.user.books.filter(
    (e) => e.status === "inprogress"
  );

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
            <NumberColor>{traningBooksArray.length}</NumberColor>
          </RoomArea>
          <TextNumber>Books left</TextNumber>
        </ListNumbers>
      </ResultItem>
    </Container>
  );
};

export default WithBooks;
