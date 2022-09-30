import { Form, Formik } from "formik";
import { Rating, BtnColor, ItemBtn, Container, Svg } from "./BookRead";
import Like from "../../images/Vector.svg";

const ExitModal = () => (
  <Container>
    <div>
      <Svg src={Like} alt="like" />
    </div>
    <Rating>Вітаю! Ще одна книга прочитана.</Rating>
    <Formik initialValues={{}} onSubmit={(values, actions) => {}}>
      <Form>
        <ItemBtn>
          <BtnColor type="submit">Готово</BtnColor>
        </ItemBtn>
      </Form>
    </Formik>
  </Container>
);

export default ExitModal;
