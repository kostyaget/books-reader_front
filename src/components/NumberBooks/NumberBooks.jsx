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
} from "./NumberBooks";

const NumberBooks = () => (
  <Container>
    <Goal>
      <TextTitle>Моя мета прочитати</TextTitle>
    </Goal>

    <ResultItem>
      <ListNumbers>
        <RoomArea>
          <Number>0</Number>
        </RoomArea>
        <TextNumber>Кількість книжок</TextNumber>
      </ListNumbers>

      <ListNumbers>
        <RoomArea>
          <Number>0</Number>
        </RoomArea>
        <TextNumber>Кількість днів</TextNumber>
      </ListNumbers>
    </ResultItem>
  </Container>
);

export default NumberBooks;
