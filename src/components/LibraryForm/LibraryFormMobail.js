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
  WrapperMobail
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
    title: yup.string().typeError("").required("*").min(3),
    author: yup.string().typeError("").required("*").min(3),
    publishingDate: yup.string().typeError("").required("*"),
    pageAmount: yup
      .number()
      .typeError("should be a number")
      .required("*")
      .min(1),
  });

  return createPortal (
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
    </WrapperMobail>,modal
  );
}
