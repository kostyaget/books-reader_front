import queryString from "query-string";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import google from "../../images/google icon.svg";
import { useLoginUserMutation } from "../../redux/auth/authApi";
import Notiflix from "notiflix";

import {
  Error,
  ErrorMessage,
  GLink,
  RLink,
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
      .email("Email should be valid")
      .min(10, "Must be more than 10 characters")
      .max(63, "Must be no more than 63 characters")
      .required("Email is required"),

    password: yup
      .string()
      .matches(/^[a-zA-Z0-9]/, "Password must start with letter or number")
      .matches(/^\S+$/, "Password  can't contain spaces")
      .min(5, "Must be more than 5 characters")
      .max(30, "Must be no more than 30 characters")
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
          onSubmit={async (values, { resetForm }) => {
            resetForm();
            const res = await loginUser(values);
            if (res.error) {
              Notiflix.Notify.failure("Wrong password or email");
            } else {
              Notiflix.Notify.success("LogIn Success");
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
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
                  value={values.password}
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

                <RLink to="/registration">
                  <Register>Register</Register>
                </RLink>
              </SectionLogin>
            </form>
          )}
        </Formik>
      </Section>
    </>
  );
};

export default Login;
