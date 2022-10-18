import Registration from "../../pages/Registration/Registration";
import {
  Container,
  LoginImg,
  SectionLogin,
  RegistrationTitles,
  RegistrationTitle,
  RegistrationList,
  RegistrationItem,
  RegistrationDesc,
  RegistrationHeading,
  Arrow,
  RegisterForm,
} from "./RegistrationSection.styled";

export default function RegistrationSection() {
  return (
    <>
      <Container>
        <SectionLogin>
          <LoginImg>
            <Registration />
          </LoginImg>
        </SectionLogin>

        <RegisterForm>
          <RegistrationTitles>
            <RegistrationTitle>Books Reading</RegistrationTitle>
            <RegistrationList>
              <RegistrationHeading>Will help you to</RegistrationHeading>
              <RegistrationItem>
                <Arrow></Arrow>
                <RegistrationDesc>
                  Create your goal faster and proceed to read
                </RegistrationDesc>
              </RegistrationItem>
              <RegistrationItem>
                <Arrow></Arrow>
                <RegistrationDesc>
                  Divide process proportionally for each day
                </RegistrationDesc>
              </RegistrationItem>
              <RegistrationItem>
                <Arrow></Arrow>
                <RegistrationDesc>Track your success</RegistrationDesc>
              </RegistrationItem>
            </RegistrationList>

            <RegistrationList>
              <RegistrationHeading>You may also</RegistrationHeading>
              <RegistrationItem>
                <Arrow></Arrow>
                <RegistrationDesc>
                  Pose your own independent point of view
                </RegistrationDesc>
              </RegistrationItem>
              <RegistrationItem>
                <Arrow></Arrow>
                <RegistrationDesc>
                  Improve your professional skills according to new knowledge
                </RegistrationDesc>
              </RegistrationItem>
              <RegistrationItem>
                <Arrow></Arrow>
                <RegistrationDesc>
                  Become an interesting interlocutor
                </RegistrationDesc>
              </RegistrationItem>
            </RegistrationList>
          </RegistrationTitles>
        </RegisterForm>
      </Container>
    </>
  );
}
