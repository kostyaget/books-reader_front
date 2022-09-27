import { useLocation, useNavigate } from "react-router-dom";
import {
  BookForm,
  BookInput,
  BackArrow,
  BookLabel,
  BookBnt,
  ValidMessege,
} from "./LibraryModal.styled";
import { Formik } from "formik";
import * as yup from "yup";
import { ReactComponent as BackArr } from "../../images/backArrow.svg";

export default function LibraryModal() {
  let navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  const validationsSchema = yup.object().shape({
    bookTitle: yup.string().typeError("").required("required field"),
    author: yup.string().typeError("").required("required field"),
    publicationDate: yup.number().typeError("should be a number").required("required field"),
    amountOfPages: yup.number().typeError("should be a number").required("required field"),
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
        onSubmit={(values) => {
          console.log(values);
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
            <BackArrow>
              <BackArr onClick={handleClick} />
            </BackArrow>
            <BookLabel htmlFor="bookTitle">Book title </BookLabel>{" "}
            {touched.bookTitle && errors.bookTitle && (
              <ValidMessege>{errors.bookTitle}</ValidMessege>
            )}
            <BookInput
              type={"text"}
              name={"bookTitle"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.bookTitle}
            ></BookInput>
            <BookLabel htmlFor="author">Author </BookLabel>
            {touched.author && errors.author && (
              <ValidMessege>{errors.author}</ValidMessege>
            )}
            <BookInput
              type={"text"}
              name={"author"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.author}
            ></BookInput>
            <BookLabel htmlFor="publicationDate">Publication date </BookLabel>
            {touched.publicationDate && errors.publicationDate && (
              <ValidMessege>{errors.publicationDate}</ValidMessege>
            )}
            <BookInput
              type={"number"}
              name={"publicationDate"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.publicationDate}
            ></BookInput>
            <BookLabel htmlFor="amountOfPages">Amount of pages </BookLabel>
            {touched.amountOfPages && errors.amountOfPages && (
              <ValidMessege>{errors.amountOfPages}</ValidMessege>
            )}
            <BookInput
              type={"number"}
              name={"amountOfPages"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.amountOfPages}
            ></BookInput>
            <BookBnt
              type="submit"
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
            >
              Add
            </BookBnt>
          </BookForm>
        )}
      </Formik>
    </div>
  );
}
