import { Form, Formik } from "formik";
import { Rating, BtnColor, ItemBtn, Container, Svg } from "./BookRead.styled";
import Like from "../../images/Vector.svg";

const ExitModal = ({ showModal, setShowModal }) => {
  return (
    <Container>
      <div>
        <Svg src={Like} alt="like" />
      </div>
      <Rating>Congratulations! Another book read.</Rating>
      <Formik>
        <Form>
          <ItemBtn>
            <BtnColor type="submit" onClick={() => setShowModal(!showModal)}>
              Done
            </BtnColor>
          </ItemBtn>
        </Form>
      </Formik>
    </Container>
  );
};

export default ExitModal;
