import { Formik } from "formik";
import * as yup from "yup";
import google from "../../images/google icon.svg";

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
} from "./registration.styled";

const Registration = () => {
  const validationSchema = yup.object().shape({
    name: yup
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
    confirmPassword: yup
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
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={({ name, email, password }) => {
            console.log(name);
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
                    Google
                  </GoogleButton>
                </GoogleSection>

                <LabelField>
                  Name
                  <Star>*</Star>
                </LabelField>
                <InputField
                  type="text"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="..."
                />
                {errors.name && touched.name ? (
                  <Error>{errors.name}</Error>
                ) : null}

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
                {errors.email && touched.email ? (
                  <Error>{errors.email}</Error>
                ) : null}

                <LabelField>
                  Password
                  <Star>*</Star>
                </LabelField>
                <InputField
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="..."
                />
                {errors.password && touched.password ? (
                  <Error>{errors.password}</Error>
                ) : null}

                <LabelField>
                  Confirm password
                  <Star>*</Star>
                </LabelField>
                <InputField
                  type="password"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="..."
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <Error>{errors.confirmPassword}</Error>
                ) : null}

                <RegisterBtn type="submit">Register</RegisterBtn>
                <LoginLink>
                  <LogTitle>Already have an account?</LogTitle>
                  <Login href="/">Log in</Login>
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
