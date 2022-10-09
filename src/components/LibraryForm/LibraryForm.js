import { useAddBookMutation } from "../../redux/users/usersApi";
import Notiflix from "notiflix";

import {
  BookForm,
  BookInputTitle,
  BookInputAuthor,
  BookInput,
  BookLabel,
  BookBnt,
  ValidMessege,
  InputWrapper,
  InputWrapperList,
} from "./LibraryForm.styled";
import { Formik } from "formik";
import * as yup from "yup";

export default function LibraryForm() {
  const [createBook] = useAddBookMutation();

  const validationsSchema = yup.object().shape({
    title: yup
      .string()
      .max(50, "Must be no more than 50 characters")
      .matches(/^[^\s-]/, "Title can't start with space or dash")
      .required("Title is required"),
    author: yup
      .string()
      .max(50, "Must be no more than 50 characters")
      .matches(/^[^\s-]/, "Author can't start with space or dash")
      .matches(/^\D+$/, "Author can't contain digits")
      .required("Author is required"),
    publishingDate: yup
      .string()
      .matches(/^[12]\d{3}$/, "Enter a valid year")
      .required("Year is required"),
    pageAmount: yup
      .number()
      .positive("Enter valid number of pages")
      .integer("Enter valid number of pages")
      .max(9999, "Enter valid number of pages")
      .required("This field is required"),
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
          Notiflix.Notify.success("Book Added");
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
              <InputWrapper>
                <BookLabel htmlFor="title">Book title</BookLabel>
                <BookInputTitle
                  type={"text"}
                  name={"title"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                {touched.title && errors.title && (
                  <ValidMessege>{errors.title}</ValidMessege>
                )}
              </InputWrapper>
              <InputWrapper>
                <BookLabel htmlFor="author">Author </BookLabel>
                <BookInputAuthor
                  type={"text"}
                  name={"author"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.author}
                />
                {touched.author && errors.author && (
                  <ValidMessege>{errors.author}</ValidMessege>
                )}
              </InputWrapper>
              <InputWrapper>
                <BookLabel htmlFor="publishingDate">Publication year</BookLabel>
                <BookInput
                  type={"text"}
                  name={"publishingDate"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.publishingDate}
                />
                {touched.publishingDate && errors.publishingDate && (
                  <ValidMessege>{errors.publishingDate}</ValidMessege>
                )}
              </InputWrapper>
              <InputWrapper>
                <BookLabel htmlFor="pageAmount">Amount of pages</BookLabel>
                <BookInput
                  type={"number"}
                  name={"pageAmount"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pageAmount}
                />
                {touched.pageAmount && errors.pageAmount && (
                  <ValidMessege>{errors.pageAmount}</ValidMessege>
                )}
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
