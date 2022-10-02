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
  NumberColor
} from "./WithBooks.styled";

const WithBooks = () => (
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

      <ListNumbers>
        <RoomArea>
          <NumberColor>100</NumberColor>
        </RoomArea>
        <TextNumber>Залишилось книжок</TextNumber>
      </ListNumbers>
    </ResultItem>
  </Container>
);

export default WithBooks;
