import { Form, Formik } from "formik";
import { Rating, BtnColor, ItemBtn, Container, Svg } from "./BookRead.styled";
import Like from "../../images/Vector.svg";

const ExitModal = () => {
  return (
    <Container>
      <div>
        <Svg src={Like} alt="like" />
      </div>
      <Rating>Congratulations! Another book read.</Rating>
      <Formik initialValues={{}} onSubmit={(values, actions) => {}}>
        <Form>
          <ItemBtn>
            <BtnColor type="submit">Done</BtnColor>
          </ItemBtn>
        </Form>
      </Formik>
    </Container>
  );
};

export default ExitModal;
