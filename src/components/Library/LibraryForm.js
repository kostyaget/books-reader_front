import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAddBookMutation } from "../../redux//books/booksApi";

import {
  BookForm,
  BookInputTitle,
  BookInputAuthor,
  BookInput,
  BackArrow,
  BookLabel,
  BookBnt,
  ValidMessege,
  InputWrapper,
  InputWrapperList,
} from "./Library.styled";
import { Formik } from "formik";
import * as yup from "yup";
import { ReactComponent as BackArr } from "../../images/backArrow.svg";

export default function LibraryForm() {
  const [book, setBook] = useState({
    bookTitle: "",
    author: "",
    publicationDate: "",
    amountOfPages: "",
  });

  const [createBook] = useAddBookMutation();
  let navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  const validationsSchema = yup.object().shape({
    bookTitle: yup.string().typeError("").required("*").min(3),
    author: yup.string().typeError("").required("*").min(3),
    publicationDate: yup.number().typeError("should be a number").required("*"),
    amountOfPages: yup
      .number()
      .typeError("should be a number")
      .required("*")
      .min(1),
  });

  return (
    <div>
      <Formik
        initialValues={{
          bookTitle: "",
          author: "",
          publicationDate: "",
          amountOfPages: "",
        }}
        validateOnBlur
        onSubmit={(values, { resetForm }) => {
          setBook(values);
          resetForm({ values: "" });
          console.log(book);
          createBook(book);
        }}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          dirty,
        }) => (
          <BookForm>
            <InputWrapperList>
              <BackArrow>
                <BackArr onClick={handleClick} />
              </BackArrow>
              <InputWrapper>
                <BookLabel htmlFor="bookTitle">
                  Book title
                  {touched.bookTitle && errors.bookTitle && (
                    <ValidMessege>{errors.bookTitle}</ValidMessege>
                  )}
                </BookLabel>

                <BookInputTitle
                  type={"text"}
                  name={"bookTitle"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bookTitle}
                ></BookInputTitle>
              </InputWrapper>
              <InputWrapper>
                <BookLabel htmlFor="author">
                  Author{" "}
                  {touched.author && errors.author && (
                    <ValidMessege>{errors.author}</ValidMessege>
                  )}
                </BookLabel>

                <BookInputAuthor
                  type={"text"}
                  name={"author"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.author}
                ></BookInputAuthor>
              </InputWrapper>
              <InputWrapper>
                <BookLabel htmlFor="publicationDate">
                  Publication date
                  {touched.publicationDate && errors.publicationDate && (
                    <ValidMessege>{errors.publicationDate}</ValidMessege>
                  )}
                </BookLabel>

                <BookInput
                  type={"number"}
                  name={"publicationDate"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.publicationDate}
                ></BookInput>
              </InputWrapper>
              <InputWrapper>
                <BookLabel htmlFor="amountOfPages">
                  Amount of pages
                  {touched.amountOfPages && errors.amountOfPages && (
                    <ValidMessege>{errors.amountOfPages}</ValidMessege>
                  )}
                </BookLabel>

                <BookInput
                  type={"number"}
                  name={"amountOfPages"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amountOfPages}
                ></BookInput>
              </InputWrapper>
              <BookBnt
                type="submit"
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
              >
                Add
              </BookBnt>
            </InputWrapperList>
          </BookForm>
        )}
      </Formik>
    </div>
  );
}
