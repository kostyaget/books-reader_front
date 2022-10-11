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

import {
  useFetchUserDataQuery,
  // useUpdateStatusMutation,
} from "../../redux/users/usersApi";
import {
  useFetchTrainingsDataQuery,
  useStartTrainingMutation,
} from "../../redux/trainings/trainingsApi";

const MyTraining = () => {
  const { data } = useFetchUserDataQuery();
  const booksList = data ? data.user.books : [];

  const training = useFetchTrainingsDataQuery();
  const isListTraining = training?.data?.data.map((el) => el.book._id);

  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");
  const [book, setBook] = useState("");

  const [addTrainingBook] = useStartTrainingMutation();
  // const [updateStatus] = useUpdateStatusMutation();

  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  // const bookStatus = {
  //   id: book,
  //   status: "inprogress",
  // };

  const startDate = start.toLocaleString("en-US", options).split("/").join(".");
  const finishDate = finish
    .toLocaleString("en-US", options)
    .split("/")
    .join(".");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTrainingBook({ startDate, finishDate, book });
    // updateStatus(bookStatus);
    reset();
  };

  const reset = () => {
    // setStart("");
    // setFinish("");
    setBook("");
  };

  return (
    <Container>
      <MyTrainingWrap>
        <TextTitle>My training</TextTitle>

        <AddForm autoComplete="off" onSubmit={handleSubmit}>
          <DatesWrap>
            <InputDateWrap>
              <CalendarIcon width="17" height="17">
                <use href={`${icons}#icon-calendar`} />
              </CalendarIcon>
              <LabelText>Start</LabelText>
              <Icon width="13" height="7">
                <use href={`${icons}#icon-polygon`} />
              </Icon>

              <DateInputPiker
                selected={start}
                onChange={(date: Date) => setStart(date)}
                required
              />
            </InputDateWrap>
            <InputDateWrap>
              <CalendarIcon width="17" height="17">
                <use href={`${icons}#icon-calendar`} />
              </CalendarIcon>
              <LabelText>Finish</LabelText>
              <Icon width="13" height="7">
                <use href={`${icons}#icon-polygon`} />
              </Icon>

              <DateInputPiker
                selected={finish}
                onChange={(date: Date) => setFinish(date)}
                required
              />
            </InputDateWrap>
          </DatesWrap>
          <SelectsWrap>
            <Select
              as="select"
              name="book"
              value={book}
              onChange={(e) => setBook(e.target.value)}
              required
            >
              <option value="" default disabled>
                Choose books from the library
              </option>
              {booksList &&
                booksList.map(
                  ({ _id = "0", title = "", status }) =>
                    status === "next" &&
                    !isListTraining?.includes(_id) && (
                      <option value={_id} key={_id}>
                        {title}
                      </option>
                    )
                )}
            </Select>
            <Button type="submit">Add</Button>
          </SelectsWrap>
        </AddForm>
      </MyTrainingWrap>
    </Container>
  );
};

export default MyTraining;
