import {
  Wrapper,
  SectionTitle,
  WrapperHeading,
  List,
  Item,
  ContainerItem,
  FirstColumn,
  IconContainer,
  Heading,
  BookTitleTablet,
  BookTitleMobile,
  WrapperTextMobile,
  TextWrapper,
  HeadingMobile,
  Text,
} from "./BooksListMarkup.styled";
import { ReactComponent as Lib } from "../Header/Logo/lib.svg";

export function BooksListMarkup() {
  return (
    <>
      <Wrapper>
        <SectionTitle>Маю намір прочитати</SectionTitle>
        <WrapperHeading>
          <Heading>Назва книги</Heading>
          <Heading>Автор</Heading>
          <Heading>Рік</Heading>
          <Heading>Стор.</Heading>
          {/* <div>Рейтинг</div> */}
        </WrapperHeading>
        <List>
          <Item>
            <ContainerItem>
              <FirstColumn>
                <IconContainer>
                  <Lib />
                </IconContainer>
                <BookTitleTablet>
                  Scrum. Революционный метод управлениями проектами.
                </BookTitleTablet>
              </FirstColumn>

              <div>
                <BookTitleMobile>
                  Scrum. Революционный метод управлениями проектами.
                </BookTitleMobile>

                <WrapperTextMobile>
                  <HeadingMobile>Автор:</HeadingMobile>
                  <TextWrapper>
                    <Text>Алекс Остервальдер, Ив Пинье</Text>
                  </TextWrapper>
                </WrapperTextMobile>
                <WrapperTextMobile>
                  <HeadingMobile>Рік:</HeadingMobile>
                  <TextWrapper>
                    <Text>2014</Text>
                  </TextWrapper>
                </WrapperTextMobile>
                <WrapperTextMobile>
                  <HeadingMobile>Стор.:</HeadingMobile>
                  <TextWrapper>
                    <Text>25</Text>
                  </TextWrapper>
                </WrapperTextMobile>
                <WrapperTextMobile>
                  <HeadingMobile>Рейтинг:</HeadingMobile>
                </WrapperTextMobile>
              </div>
            </ContainerItem>
          </Item>
          <Item>
            <ContainerItem>
              <IconContainer>
                <Lib />
              </IconContainer>
              <div>
                <Text>Scrum. Революционный метод управлениями проектами.</Text>
                <WrapperTextMobile>
                  <div>
                    <HeadingMobile>Автор</HeadingMobile>
                    <HeadingMobile>Рік</HeadingMobile>
                    <HeadingMobile>Стор.</HeadingMobile>
                    {/* <div>Рейтинг</div> */}
                  </div>

                  <div>
                    <Text>Джефф Сазерленд</Text>
                    <Text>2014</Text>
                    <Text>25</Text>
                    {/* <div>Рейтинг</div> */}
                  </div>
                </WrapperTextMobile>
              </div>
            </ContainerItem>
          </Item>
        </List>
      </Wrapper>
    </>
  );
}
