import { Form, Formik } from "formik";
import { Rating, Forms, BtnColor, Btn, ItemBtn, Container } from "./Resume";

const Resume = () => (
  <Container>
    <Rating>Обрати рейтинг книги</Rating>
    <Rating>Резюме</Rating>
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      <Form>
        <Forms type="text" name="text" placeholder="..."></Forms>
        <ItemBtn>
          <Btn type="button">Назад</Btn>
          <BtnColor type="submit">Зберегти</BtnColor>
        </ItemBtn>
      </Form>
    </Formik>
  </Container>
);

export default Resume;
