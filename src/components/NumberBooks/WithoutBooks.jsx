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
        <TextTitle>Моя мета прочитати</TextTitle>
      </Goal>
      <ResultItem>
        <ListNumbers>
          <RoomArea>
            <Number>100</Number>
          </RoomArea>
          <TextNumber>Кількість книжок</TextNumber>
        </ListNumbers>

        <ListNumbers>
          <RoomArea>
            <Number>100</Number>
          </RoomArea>
          <TextNumber>Кількість днів</TextNumber>
        </ListNumbers>
      </ResultItem>
    </Container>
  );
};

export default WithoutBooks;
