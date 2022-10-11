import { Formik } from "formik";
import * as yup from "yup";
import google from "../../images/google icon.svg";
import { useCreateNewUserMutation } from "../../redux/auth/authApi";
import Notiflix from "notiflix";

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
  RLink,
  ErrorMessage,
} from "./registration.styled";

const Registration = () => {
  const [createUser] = useCreateNewUserMutation();

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .matches(/^[a-zA-Z0-9]/, "Username must start with letter or number")
      .min(3, "Must be more than 3 characters")
      .max(100, "Must be no more than 100 characters")
      .required("Username is required"),
    email: yup
      .string()
      .email("Email should be valid")
      .matches(/^[a-zA-Z0-9]/, "Email should be valid")
      .matches(/^.{2,}@/, "Email should be valid")
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
    repeat_password: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .min(5, "Must be more than 5 characters")
      .max(30, "Must be no more than 30 characters")
      .required("Password confirmation is a required"),
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
          onSubmit={async (values, { resetForm }) => {
            resetForm();
            const res = await createUser(values);
            if (res.error) {
              Notiflix.Notify.failure("You can't use this email");
            } else {
              Notiflix.Notify.warning("Confirmation email has been sent");
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
                  onPaste={(e) => e.preventDefault()}
                />
                <ErrorMessage>
                  {errors.repeat_password && touched.repeat_password ? (
                    <Error>{errors.repeat_password}</Error>
                  ) : null}
                </ErrorMessage>
                <RegisterBtn type="submit">Register</RegisterBtn>
                <LoginLink>
                  <LogTitle>Already have an account?</LogTitle>
                  <RLink to="/login">
                    <Login>Log in</Login>
                  </RLink>
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
