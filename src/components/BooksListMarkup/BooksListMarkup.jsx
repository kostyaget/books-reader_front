import {
  Wrapper,
  SectionTitle,
  Table,
  TrHead,
  THead,
  ThBookTitle,
  ThAuthor,
  ThYear,
  ThPages,
  ThRating,
  Tbody,
  Trbody,
  TdBookTitle,
  TdAuthor,
  TdYear,
  TdPages,
  TdRating,
  MobileTableWrapper,
  TableMobile,
  TbodyMobile,
  TrMobile,
  ThMobile,
  TdMobile,
  FirstColumn,
  IconContainer,
  Text,
} from "./BooksListMarkup.styled";

const raiting = true;

export default function BooksListMarkup() {
  return (
    <Wrapper>
      <SectionTitle>Маю намір прочитати</SectionTitle>
      <Table>
        <THead>
          <TrHead>
            <ThBookTitle>Назва книги</ThBookTitle>
            <ThAuthor>Автор</ThAuthor>
            <ThYear>Рік</ThYear>
            <ThPages>Стор.</ThPages>
            {raiting && <ThRating>Рейтинг</ThRating>}
          </TrHead>
        </THead>
        <Tbody>
          {/* {items.map(({ id, type, amount, currency }) => ( */}
          <Trbody>
            <TdBookTitle>
              <FirstColumn>
                <IconContainer>Ico</IconContainer>
                <div>
                  <Text>
                    Scrum. Революционный метод управлениями проектами.
                  </Text>
                  {/* mobile table start */}
                  <MobileTableWrapper>
                    <TableMobile>
                      <TbodyMobile>
                        <TrMobile>
                          <ThMobile>Автор:</ThMobile>
                          <TdMobile>Алекс Остервальдер, Ив Пинье</TdMobile>
                        </TrMobile>
                        <TrMobile>
                          <ThMobile>Рік:</ThMobile>
                          <TdMobile>2014</TdMobile>
                        </TrMobile>
                        <TrMobile>
                          <ThMobile>Стор.:</ThMobile>
                          <TdMobile>25</TdMobile>
                        </TrMobile>
                        {raiting && (
                          <TrMobile>
                            <ThMobile>Рейтинг:</ThMobile>
                            <TdMobile>55555</TdMobile>
                          </TrMobile>
                        )}
                      </TbodyMobile>
                    </TableMobile>
                  </MobileTableWrapper>
                  {/* mobile table end */}
                </div>
              </FirstColumn>
            </TdBookTitle>
            <TdAuthor>
              <Text>Алекс Остервальдер, Ив Пинье</Text>{" "}
            </TdAuthor>
            <TdYear>
              <Text>2014</Text>
            </TdYear>
            <TdPages>
              <Text>25</Text>
            </TdPages>
            {raiting && <TdRating>55555 </TdRating>}
          </Trbody>
          {/* ))} */}
        </Tbody>
      </Table>
    </Wrapper>
  );
}
