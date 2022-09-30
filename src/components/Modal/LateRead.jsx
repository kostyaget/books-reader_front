// import { useState } from "react";
import { Form, Formik } from "formik";
import { Rating, BtnColor, Btn, ItemBtn, Container,Svg} from "./LateRead";
// import styled from 'styled-components'
import Like from '../../images/Vector2.svg'

const ExitModal = () => (  
  <Container>
    <div>
      <Svg src={Like} alt="like" />
    </div>
    <Rating>
      Ти молодчина, але потрібно швидше! Наступного разу тобі все вдасться)
    </Rating>
    <Formik initialValues={{}} onSubmit={(values, actions) => {}}>
      <Form>
        <ItemBtn>
          <BtnColor type="submit">Готово</BtnColor>
          <Btn type="button">Назад</Btn>
        </ItemBtn>
      </Form>
    </Formik>
  </Container>
);

export default ExitModal;
