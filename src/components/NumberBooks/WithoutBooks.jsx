import React from "react";

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
  return (
    <Container>
      <Goal>
        <TextTitle>My goals</TextTitle>
      </Goal>
      <ResultItem>
        <ListNumbers>
          <RoomArea>
            <Number>0</Number>
          </RoomArea>
          <TextNumber>Amount of books</TextNumber>
        </ListNumbers>

        <ListNumbers>
          <RoomArea>
            <Number>0</Number>
          </RoomArea>
          <TextNumber>Amount of days</TextNumber>
        </ListNumbers>
      </ResultItem>
    </Container>
  );
};

export default WithoutBooks;
