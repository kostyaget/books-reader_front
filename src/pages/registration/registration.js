import { Formik } from "formik";
import * as yup from "yup";
import google from "../../images/google icon.svg";
import { useCreateNewUserMutation } from "../../redux/auth/authApi";

import {
  Section,
  GoogleSection,
  SectionRegistration,
  GoogleButton,
  GoogleLogo,
  Error,
  LabelField,
  InputField,
  RegisterBtn,
  LogTitle,
  Login,
  Star,
  LoginLink,
  GLink,
  ErrorMessage,
} from "./registration.styled";
import { Link } from "react-router-dom";

const Registration = () => {
  const [createUser] = useCreateNewUserMutation();

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .typeError("Will be a string")
      .min(3)
      .required("Required"),
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
    repeat_password: yup
      .string()
      .min(6)
      .oneOf([yup.ref("password")], "Passwords doesn't match")
      .required("Required"),
  });

  return (
    <>
      <Section>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            repeat_password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            createUser(values);
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
              <SectionRegistration>
                <GoogleSection>
                  <GoogleButton type="submit">
                    <GoogleLogo src={google} alt="google" />
                    <GLink href="https://books-reader-project.herokuapp.com/api/auth/google">
                      Google{" "}
                    </GLink>
                  </GoogleButton>
                </GoogleSection>

                <LabelField>
                  Name
                  <Star>*</Star>
                </LabelField>
                <InputField
                  type="text"
                  name="username"
                  value={values.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="..."
                />
                <ErrorMessage>
                  {errors.username && touched.username ? (
                    <Error>{errors.username}</Error>
                  ) : null}
                </ErrorMessage>
                <LabelField>
                  Email
                  <Star>*</Star>
                </LabelField>
                <InputField
                  type="email"
                  name="email"
                  value={values.email}
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
                  placeholder="..."
                />
                <ErrorMessage>
                  {errors.password && touched.password ? (
                    <Error>{errors.password}</Error>
                  ) : null}
                </ErrorMessage>
                <LabelField>
                  Confirm password
                  <Star>*</Star>
                </LabelField>
                <InputField
                  type="password"
                  name="repeat_password"
                  value={values.repeat_password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="..."
                />
                <ErrorMessage>
                  {errors.repeat_password && touched.repeat_password ? (
                    <Error>{errors.repeat_password}</Error>
                  ) : null}
                </ErrorMessage>
                <RegisterBtn type="submit">Register</RegisterBtn>
                <LoginLink>
                  <LogTitle>Already have an account?</LogTitle>
                  <Link to="/login">
                    <Login>Log in</Login>{" "}
                  </Link>
                </LoginLink>
              </SectionRegistration>
            </form>
          )}
        </Formik>
      </Section>
    </>
  );
};

export default Registration;
