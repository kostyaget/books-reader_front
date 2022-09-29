// import { useState } from "react";
import { Form, Formik } from "formik";
import { Rating, Forms, BtnColor, Btn, ItemBtn, Container } from "./ExitModal";

const ExitModal = () => (
  <Container>
    <Rating>Якщо Ви вийдете з програми незбережені дані будуть втрачені</Rating>
    <Formik
      initialValues={{}}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      <Form>
        <ItemBtn>
          <Btn type="button">Відміна</Btn>
          <BtnColor type="submit">Вийти</BtnColor>
        </ItemBtn>
      </Form>
    </Formik>
  </Container>
);

export default ExitModal;
