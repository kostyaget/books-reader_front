import { Form, Formik } from "formik";
import {
  Rating,
  BtnColor,
  Btn,
  ItemBtn,
  Container,
  Svg,
} from "./LateRead.styled";
import Like from "../../images/Vector2.svg";

const ExitModal = ({ showModal, setShowModal }) => {
  return (
    <Container>
      <div>
        <Svg src={Like} alt="like" />
      </div>
      <Rating>
        Ти молодчина, але потрібно швидше! Наступного разу тобі все вдасться
      </Rating>
      <Formik initialValues={{}} onSubmit={(values, actions) => {}}>
        <Form>
          <ItemBtn>
            <BtnColor type="submit" onClick={() => setShowModal(!showModal)}>
              Готово
            </BtnColor>
            <Btn type="button" onClick={() => setShowModal(!showModal)}>
              Назад
            </Btn>
          </ItemBtn>
        </Form>
      </Formik>
    </Container>
  );
};

export default ExitModal;
