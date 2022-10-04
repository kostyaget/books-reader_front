import { Form, Formik } from "formik";
import { Rating, BtnColor, Btn, ItemBtn, Container } from "./ExitModal.style";

const ExitModal = () => {
  return (
    <Container>
      <Rating>
        The changes you made will be lost if you navigate away from this
        application
      </Rating>
      <Formik initialValues={{}} onSubmit={(values, actions) => {}}>
        <Form>
          <ItemBtn>
            <Btn type="button">Cancel</Btn>
            <BtnColor type="submit">Leave this app</BtnColor>
          </ItemBtn>
        </Form>
      </Formik>
    </Container>
  );
};

export default ExitModal;
