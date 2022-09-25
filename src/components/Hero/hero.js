import {
  Container,
  SectionLogin,
  SectionTitles,
  Icon,
  Text,
  Author,
  LoginImg,
} from "./hero.styled";

export default function Hero() {
  return (
    <>
      <Container>
        <SectionLogin>
          <LoginImg></LoginImg>
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
