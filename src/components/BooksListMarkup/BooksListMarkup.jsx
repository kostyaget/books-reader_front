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
  TdEmpty,
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
  LibraryIco,
  LibraryActiveIco,
  Text,
} from "./BooksListMarkup.styled";
import PropTypes from "prop-types";

export default function BooksListMarkup({
  titleSection = "",
  alreadyReadList = false,
  list = [],
}) {
  let empty = false;
  if (!list.length) {
    empty = true;
  }
  return (
    <Wrapper>
      {titleSection && <SectionTitle>{titleSection}</SectionTitle>}
      <Table>
        <THead>
          <TrHead>
            <ThBookTitle>Назва книги</ThBookTitle>
            <ThAuthor>Автор</ThAuthor>
            <ThYear>Рік</ThYear>
            <ThPages>Стор.</ThPages>
            {alreadyReadList && <ThRating>Рейтинг</ThRating>}
          </TrHead>
        </THead>
        <Tbody>
          {list.map(
            ({
              id,
              alreadyRead,
              readingNow,
              goingToRead,
              book_name,
              author,
              year,
              pages,
              rating,
            }) => (
              <Trbody key={id}>
                <TdBookTitle>
                  <FirstColumn>
                    <IconContainer>
                      {alreadyRead && <LibraryIco />}
                      {readingNow && <LibraryActiveIco />}
                      {goingToRead && <LibraryIco />}
                    </IconContainer>
                    <div>
                      <Text>{book_name}</Text>
                      {/* mobile table start */}
                      <MobileTableWrapper>
                        <TableMobile>
                          <TbodyMobile>
                            <TrMobile>
                              <ThMobile>Автор:</ThMobile>
                              <TdMobile>{author}</TdMobile>
                            </TrMobile>
                            <TrMobile>
                              <ThMobile>Рік:</ThMobile>
                              <TdMobile>{year}</TdMobile>
                            </TrMobile>
                            <TrMobile>
                              <ThMobile>Стор.:</ThMobile>
                              <TdMobile>{pages}</TdMobile>
                            </TrMobile>
                            {alreadyReadList && (
                              <TrMobile>
                                <ThMobile>Рейтинг:</ThMobile>
                                <TdMobile>{rating}</TdMobile>
                              </TrMobile>
                            )}
                          </TbodyMobile>
                        </TableMobile>
                      </MobileTableWrapper>
                      {/* mobile table end */}
                    </div>
                  </FirstColumn>
                </TdBookTitle>
                <TdAuthor>{author}</TdAuthor>
                <TdYear>{year}</TdYear>
                <TdPages>{pages}</TdPages>
                {alreadyReadList && <TdRating>{rating}</TdRating>}
              </Trbody>
            )
          )}
          {/* empty start */}
          {empty && (
            <Trbody>
              <TdEmpty>
                <FirstColumn>
                  <IconContainer>
                    <LibraryIco />
                  </IconContainer>
                  <div>
                    <Text>Книг нема</Text>
                  </div>
                </FirstColumn>
              </TdEmpty>
              {/* <TdAuthor></TdAuthor>
              <TdYear></TdYear>
              <TdPages></TdPages> */}
              {alreadyReadList && <TdRating></TdRating>}
            </Trbody>
          )}
          {/* empty end */}
        </Tbody>
      </Table>
    </Wrapper>
  );
}

BooksListMarkup.propTypes = {
  titleSection: PropTypes.string.isRequired,
  alreadyReadList: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
};

// how to connect
// import BooksListMarkup from './components/BooksListMarkup/BooksListMarkup';
// import BOOKSLIST_DATA_TEST from './components/BooksListMarkup/BOOKSLIST_DATA_TEST.json'

// <BooksListMarkup titleSection={titleSection} alreadyReadList={false} list={booksListBase} />
