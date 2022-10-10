import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import Notiflix from "notiflix";
// import { useSelector } from "react-redux";
import {
  useAddResultsMutation,
  useFetchUserDataQuery,
} from "../../../redux/users/usersApi";
// import { selectCurrentUser } from "../../../redux/auth/auth";
import { useFetchTrainingsDataQuery } from "../../../redux/trainings/trainingsApi";
import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ExitModal from "../../Modal/BookRead";
import LateRead from "../../Modal/LateRead";
import {
  FormResult,
  InputWrapper,
  Label,
  LabelText,
  Input,
  DateInput,
  ErrorText,
  Button,
} from "./ResultForm.styled";

const schema = yup.object().shape({
  trainingDate: yup
    .date()
    .min(new Date(2022, 9, 9), "Select a valid date")
    .max(new Date(), "Select valid date")
    .required("Enter a date"),
  pagesAmount: yup
    .number()
    .positive("Enter valid number of pages")
    .integer("Enter valid number of pages")
    .max(999, "Enter number less than 1000")
    .required("Amount of pages is required"),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => <ErrorText>{message}</ErrorText>}
    />
  );
};

export default function ResultForm({
  userId,
  clearListBook,
  dataTrainingBook,
}) {
  const user = useFetchUserDataQuery();
  const fetch = useFetchTrainingsDataQuery();
  const [showModal, setShowModal] = useState(false);
  const [addResult] = useAddResultsMutation();
  const arrayBooks = fetch?.data?.data;
  const userProgress = user?.data?.user?.info?.progress;

  let totalPages = 0;
  let totalProgressPages = 0;
  const id = userId;
  if (arrayBooks) {
    totalPages = arrayBooks?.reduce((a, e) => a + e.book.pageAmount, 0);
  }
  if (user) {
    totalProgressPages = userProgress?.reduce((a, e) => a + e.pagesAmount, 0);
  }

  const isShowModal = () => {
    setShowModal(!showModal);
  };
  const handleSubmit = async (values, { resetForm }) => {
    const now = new Date();
    values.trainingDate.setHours(now.getHours());
    values.trainingDate.setMinutes(now.getMinutes());
    values.trainingDate.setSeconds(now.getSeconds());
    resetForm();
    const res = await addResult({ id, ...values });
    if (res.error) {
      Notiflix.Notify.failure("Please, sign in again");
    } else {
      isShowModal();
    }
  };
  const nodeRef = useRef(null);
  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        timeout={300}
        in={showModal}
        unmountOnExit
      >
        <div ref={nodeRef}>
          {totalProgressPages >= totalPages ? (
            <ExitModal
              showModal={showModal}
              setShowModal={setShowModal}
              clearListBook={clearListBook}
              userId={userId}
              data={dataTrainingBook}
            />
          ) : (
            <LateRead showModal={showModal} setShowModal={setShowModal} />
          )}
        </div>
      </CSSTransition>
      <Formik
        initialValues={{ trainingDate: "", pagesAmount: "" }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormResult autoComplete="off">
          <InputWrapper>
            <Label>
              <LabelText>Date</LabelText>
              <DateInput name="trainingDate" />
              <FormError name="trainingDate" />
            </Label>
            <Label>
              <LabelText>Amount of pages</LabelText>
              <Input type="number" name="pagesAmount" />
              <FormError name="pagesAmount" />
            </Label>
          </InputWrapper>
          <Button type="submit">Add result</Button>
        </FormResult>
      </Formik>
    </>
  );
}
