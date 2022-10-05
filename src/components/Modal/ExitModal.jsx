import { useState } from "react";
import { useLogoutUserMutation } from "../../redux/auth/authApi";
import { createPortal } from "react-dom";

import { Form, Formik } from "formik";
import { Rating, BtnColor, Btn, ItemBtn, Container } from "./ExitModal.style";

const ExitModal = () => {
  const modal = document.querySelector("#modal-root");

  const [logoutUser] = useLogoutUserMutation();
  const [active, setActive] = useState(true);
  const onStart = () => {
    setActive(false);
  };
  return createPortal(
    <Container style={active ? { display: "block" } : { display: "none" }}>
      <Rating>
        The changes you made will be lost if you navigate away from this
        application
      </Rating>
      <Formik initialValues={{}} onSubmit={(values, actions) => {}}>
        <Form>
          <ItemBtn>
            <Btn type="button" onClick={onStart}>
              Cancel
            </Btn>
            <BtnColor type="button" onClick={() => logoutUser()}>
              Leave this app
            </BtnColor>
          </ItemBtn>
        </Form>
      </Formik>
    </Container>,
    modal
  );
};

export default ExitModal;
