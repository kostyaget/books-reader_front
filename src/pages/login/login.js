import { Formik } from "formik";
import * as yup from "yup";
import google from "../../images/google icon.svg";
import { Link } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/auth/authApi";

import {
  Error,
  ErrorMessage,
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

const Login = () => {
  const [loginUser] = useLoginUserMutation();
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
                    <a href="https://books-reader-project.herokuapp.com/api/auth/google">
                      Google{" "}
                    </a>
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
                <LogiBtn tn type="submit">Login</LogiBtn>

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
