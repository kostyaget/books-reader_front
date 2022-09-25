import { Formik } from "formik";
import * as yup from "yup";
import google from "../../images/google icon.svg";

import { GoogleButton, GoogleLogo, Section } from "./login.styled";

const Login = () => {
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
            resetForm();
          }}
        >
          {({ errors, touched, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <GoogleButton type="submit">
                <GoogleLogo src={google} alt="google" />
                Google
              </GoogleButton>

              <label>Email</label>
              <input
                type="email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.email && touched.email ? <p>{errors.email}</p> : null}

              <label>Password</label>
              <input
                type="password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.password && touched.password ? (
                <p>{errors.password}</p>
              ) : null}

              <button type="submit">Login</button>
            </form>
          )}
        </Formik>
      </Section>
    </>
  );
};

export default Login;
