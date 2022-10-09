import { useAddBookMutation } from "../../redux/users/usersApi";
import { useState } from "react";
import { createPortal } from "react-dom";
import Notiflix from "notiflix";

import {
  BookFormMobile,
  BookInputTitleMobile,
  BookInputAuthorMobile,
  BookInputMobile,
  BackArrowMobile,
  BookLabelMobile,
  BookBntMobile,
  ValidMessegeMobile,
  InputWrapperMobile,
  InputWrapperListMobile,
  WrapperMobail,
} from "./LibraryFormMobile.styled";
import { Formik } from "formik";
import * as yup from "yup";
import { ReactComponent as BackArr } from "../../images/backArrow.svg";

export default function LibraryFormMobail() {
  const [createBook] = useAddBookMutation();
  const modal = document.querySelector("#modal-root");

  const [active, setActive] = useState(true);
  const onStart = () => {
    setActive(false);
  };

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

  return createPortal(
    <WrapperMobail style={active ? { display: "block" } : { display: "none" }}>
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
          <BookFormMobile>
            <InputWrapperListMobile>
              <BackArrowMobile>
                <BackArr onClick={onStart} />
              </BackArrowMobile>
              <InputWrapperMobile>
                <BookLabelMobile htmlFor="title">
                  Book title
                  {touched.title && errors.title && (
                    <ValidMessegeMobile>{errors.title}</ValidMessegeMobile>
                  )}
                </BookLabelMobile>

                <BookInputTitleMobile
                  type={"text"}
                  name={"title"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                ></BookInputTitleMobile>
              </InputWrapperMobile>
              <InputWrapperMobile>
                <BookLabelMobile htmlFor="author">
                  Author{" "}
                  {touched.author && errors.author && (
                    <ValidMessegeMobile>{errors.author}</ValidMessegeMobile>
                  )}
                </BookLabelMobile>

                <BookInputAuthorMobile
                  type={"text"}
                  name={"author"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.author}
                ></BookInputAuthorMobile>
              </InputWrapperMobile>
              <InputWrapperMobile>
                <BookLabelMobile htmlFor="publishingDate">
                  Publication date
                  {touched.publishingDate && errors.publishingDate && (
                    <ValidMessegeMobile>
                      {errors.publishingDate}
                    </ValidMessegeMobile>
                  )}
                </BookLabelMobile>

                <BookInputMobile
                  type={"text"}
                  name={"publishingDate"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.publishingDate}
                ></BookInputMobile>
              </InputWrapperMobile>
              <InputWrapperMobile>
                <BookLabelMobile htmlFor="pageAmount">
                  Amount of pages
                  {touched.pageAmount && errors.pageAmount && (
                    <ValidMessegeMobile>{errors.pageAmount}</ValidMessegeMobile>
                  )}
                </BookLabelMobile>

                <BookInputMobile
                  type={"number"}
                  name={"pageAmount"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pageAmount}
                ></BookInputMobile>
              </InputWrapperMobile>
              <BookBntMobile
                type="submit"
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
              >
                Add
              </BookBntMobile>
            </InputWrapperListMobile>
          </BookFormMobile>
        )}
      </Formik>
    </WrapperMobail>,
    modal
  );
}
