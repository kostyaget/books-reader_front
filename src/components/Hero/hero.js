import {
  Container,
  SectionLogin,
  SectionTitles,
  Icon,
  Text,
  Author,
  LoginImg,
} from "./hero.styled";

import LoginForm from "../../pages/login/login";
import RegistrationForm from "../../pages/registration/registration";

export default function Hero() {
  return (
    <>
      <Container>
        <SectionLogin>
          <LoginImg>
            <LoginForm />
            <RegistrationForm />
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
};


