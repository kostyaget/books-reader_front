import LoginForm from "../../pages/login/Login";
import {
  Container,
  SectionLogin,
  SectionTitles,
  Icon,
  Text,
  Author,
  LoginImg,
} from "./login.styled";

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
