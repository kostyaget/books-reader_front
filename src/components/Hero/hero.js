import {
  Container,
  SectionLogin,
  SectionTitles,
  Sidebar,
  Icon,
  Text,
  Author,
} from "./hero.styled";

export default function Hero() {
  return (
    <>
      <Container>
        <SectionLogin></SectionLogin>
        <SectionTitles>
          <Sidebar>
            <Icon></Icon>
            <Text>
              Books are the ships of thoughts, wandering through the waves of
              time.
            </Text>
            <Author>Francis Bacon</Author>
          </Sidebar>
        </SectionTitles>
      </Container>
    </>
  );
}
