import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";

import React from "react";
import {
  Container,
  DatesWrap,
  InputDateWrap,
  MyTrainingWrap,
  TextTitle,
  Icon,
  CalendarIcon,
  Button,
  SelectsWrap,
  AddForm,
  LabelText,
  DateInputPiker,
  Select,
} from "./MyTraining.styled";
import icons from "../../images/svg/date.svg";

import { useFetchUserDataQuery } from "../../redux/users/usersApi";
import { useStartTrainingMutation } from "../../redux/trainings/trainingsApi";

const MyTraining = () => {
  const { data } = useFetchUserDataQuery();
  const booksList = data ? data.user.books : [];

  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");
  const [book, setBook] = useState("");

  const [addTrainingBook] = useStartTrainingMutation();

  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  const startDate = start.toLocaleString("en-US", options).split("/").join(".");
  const finishDate = finish
    .toLocaleString("en-US", options)
    .split("/")
    .join(".");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTrainingBook({ startDate, finishDate, book });
    reset();
  };

  const reset = () => {
    setStart("");
    setFinish("");
    setBook("");
  };

  return (
    <Container>
      <MyTrainingWrap>
        <TextTitle>Моє тренування</TextTitle>

        <AddForm autoComplete="off" onSubmit={handleSubmit}>
          <DatesWrap>
            <InputDateWrap>
              <CalendarIcon width="17" height="17">
                <use href={`${icons}#icon-calendar`} />
              </CalendarIcon>
              <LabelText>Початок</LabelText>
              <Icon width="13" height="7">
                <use href={`${icons}#icon-polygon`} />
              </Icon>

              <DateInputPiker
                selected={start}
                onChange={(date: Date) => setStart(date)}
              />
            </InputDateWrap>
            <InputDateWrap>
              <CalendarIcon width="17" height="17">
                <use href={`${icons}#icon-calendar`} />
              </CalendarIcon>
              <LabelText>Завершення</LabelText>
              <Icon width="13" height="7">
                <use href={`${icons}#icon-polygon`} />
              </Icon>

              <DateInputPiker
                selected={finish}
                onChange={(date: Date) => setFinish(date)}
              />
            </InputDateWrap>
          </DatesWrap>
          <SelectsWrap>
            <Select
              as="select"
              name="book"
              value={book}
              onChange={(e) => setBook(e.target.value)}
            >
              <option value="" default disabled>
                {/* <option value="" default disabled selected> */}
                Обрати книги з бібліотеки
              </option>
              {booksList &&
                booksList.map(({ _id = "0", title = "" }) => (
                  <option value={_id} key={_id}>
                    {title}
                  </option>
                ))}
            </Select>
            <Button type="submit">Додати</Button>
          </SelectsWrap>
        </AddForm>
      </MyTrainingWrap>
    </Container>
  );
};

export default MyTraining;
