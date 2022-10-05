import { useNavigate } from "react-router-dom";
import { useAddBookMutation } from "../../redux/users/usersApi";

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
} from "./LibraryForm.styled";
import { Formik } from "formik";
import * as yup from "yup";
import { ReactComponent as BackArr } from "../../images/backArrow.svg";

export default function LibraryForm() {
  const [createBook] = useAddBookMutation();
  let navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  const validationsSchema = yup.object().shape({
    title: yup.string().typeError("").required("*").min(3),
    author: yup.string().typeError("").required("*").min(3),
    publishingDate: yup.string().typeError("").required("*"),
    pageAmount: yup
      .number()
      .typeError("should be a number")
      .required("*")
      .min(1),
  });

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          author: "",
          publishingDate: "",
          pageAmount: "",
        }}
        validateOnBlur
        onSubmit={(values, { resetForm }) => {
          resetForm({ values: "" });
          createBook(values);
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
                <BookLabel htmlFor="title">
                  Book title
                  {touched.title && errors.title && (
                    <ValidMessege>{errors.title}</ValidMessege>
                  )}
                </BookLabel>

                <BookInputTitle
                  type={"text"}
                  name={"title"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
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
                <BookLabel htmlFor="publishingDate">
                  Publication date
                  {touched.publishingDate && errors.publishingDate && (
                    <ValidMessege>{errors.publishingDate}</ValidMessege>
                  )}
                </BookLabel>

                <BookInput
                  type={"text"}
                  name={"publishingDate"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.publishingDate}
                ></BookInput>
              </InputWrapper>
              <InputWrapper>
                <BookLabel htmlFor="pageAmount">
                  Amount of pages
                  {touched.pageAmount && errors.pageAmount && (
                    <ValidMessege>{errors.pageAmount}</ValidMessege>
                  )}
                </BookLabel>

                <BookInput
                  type={"number"}
                  name={"pageAmount"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pageAmount}
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
