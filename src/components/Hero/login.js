// import queryString from "query-string";
// import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import {
  Container,
  SectionLogin,
  SectionTitles,
  Icon,
  Text,
  Author,
  LoginImg,
} from "./login.styled";

import LoginForm from "../../pages/login/login";

export default function Hero() {
  return (
    <>
      <Container>
        <SectionLogin>
          <LoginImg>
            <LoginForm />
          </LoginImg>
        </SectionLogin>
        <SectionTitles>
          <Icon></Icon>
          <Text>
            Books are the ships of thoughts, wandering through the waves of
            time.
          </Text>
          <Author>Francis Bacon</Author>
        </SectionTitles>
      </Container>
    </>
  );
}
