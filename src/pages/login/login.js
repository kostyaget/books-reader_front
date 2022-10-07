import { Formik } from "formik";
import * as yup from "yup";
import google from "../../images/google icon.svg";
import { useLoginUserMutation } from "../../redux/auth/authApi";
import Notiflix from "notiflix";

import queryString from "query-string";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  Error,
  ErrorMessage,
  GLink,
  GoogleButton,
  GoogleLogo,
  GoogleSection,
  InputField,
  LabelField,
  LogiBtn,
  Register,
  Section,
  SectionLogin,
  Star,
} from "./login.styled";

import { googleLogIn } from "../../redux/auth/auth";

const Login = () => {
  const [loginUser] = useLoginUserMutation();

  const location = useLocation();
  const query = queryString.parse(location.search);
  const dispatch = useDispatch();
  useEffect(() => {
    if (query.token) {
      const { name, email, token } = query;
      const user = { name, email };
      dispatch(googleLogIn({ user, token }));
    }
  });

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .typeError("Will be a string")
      .min(4)
      .required("Required"),
    password: yup
      .string()
      .typeError("Will be a string")
      .min(6)
      .required("Required"),
  });

  return (
    <>
      <Section>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            loginUser(values);
            Notiflix.Notify.success("LogIn Success");
            resetForm();
          }}
        >
          {({ errors, touched, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <SectionLogin>
                <GoogleSection>
                  <GoogleButton>
                    {" "}
                    <GoogleLogo src={google} alt="google" />{" "}
                    <GLink href="https://books-reader-project.herokuapp.com/api/auth/google">
                      Google{" "}
                    </GLink>
                  </GoogleButton>
                </GoogleSection>

                <LabelField>
                  Email<Star>*</Star>
                </LabelField>
                <InputField
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
                <ErrorMessage>
                  {errors.email && touched.email ? (
                    <Error>{errors.email}</Error>
                  ) : null}
                </ErrorMessage>
                <LabelField>
                  Password
                  <Star>*</Star>
                </LabelField>
                <InputField
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <ErrorMessage>
                  {errors.password && touched.password ? (
                    <Error>{errors.password}</Error>
                  ) : null}
                </ErrorMessage>
                <LogiBtn tn type="submit">
                  Login
                </LogiBtn>

                <Link to="/registration">
                  <Register>Register</Register>
                </Link>
              </SectionLogin>
            </form>
          )}
        </Formik>
      </Section>
    </>
  );
};

export default Login;
