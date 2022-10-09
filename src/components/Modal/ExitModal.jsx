import { Form, Formik } from "formik";
import { Rating, BtnColor, Btn, ItemBtn, Container } from "./ExitModal.style";
import "./Resume.css";

const ExitModal = ({ open, onClose, logoutFunc }) => {
  return (
    <div className={open ? "modal active" : "modal"} onClick={onClose}>
      <div
        className={open ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <Container open={open} onClose={onClose}>
          <Rating>
            The changes you made will be lost if you navigate away from this
            application
          </Rating>
          <Formik>
            <Form>
              <ItemBtn>
                <Btn type="button" onClick={onClose}>
                  Cancel
                </Btn>
                <BtnColor type="button" onClick={logoutFunc}>
                  Leave this app
                </BtnColor>
              </ItemBtn>
            </Form>
          </Formik>
        </Container>
        </div>
    </div>
  );
};

export default ExitModal;
