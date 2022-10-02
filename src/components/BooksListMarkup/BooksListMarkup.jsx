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
import EllipsisText from "react-ellipsis-text";
import ButtonResume from "./ButtonResume/ButtonResume";

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
            <ThBookTitle>Book title</ThBookTitle>
            <ThAuthor>Author</ThAuthor>
            <ThYear>Year</ThYear>
            <ThPages>Pages</ThPages>
            {alreadyReadList && <ThRating>Rating</ThRating>}
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
                      <Text>
                        <EllipsisText text={book_name} length={40} />
                      </Text>
                      {/* mobile table start */}
                      <MobileTableWrapper>
                        <TableMobile>
                          <TbodyMobile>
                            <TrMobile>
                              <ThMobile>Author:</ThMobile>
                              <TdMobile>
                                <EllipsisText text={author} length={20} />
                              </TdMobile>
                            </TrMobile>
                            <TrMobile>
                              <ThMobile>Year:</ThMobile>
                              <TdMobile>{year}</TdMobile>
                            </TrMobile>
                            <TrMobile>
                              <ThMobile>Pages:</ThMobile>
                              <TdMobile>{pages}</TdMobile>
                            </TrMobile>
                            {alreadyReadList && (
                              <TrMobile>
                                <ThMobile>Rating:</ThMobile>
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
                <TdAuthor>
                  <EllipsisText text={author} length={20} />
                </TdAuthor>
                <TdYear>{year}</TdYear>
                <TdPages>{pages}</TdPages>
                {alreadyReadList && (
                  <TdRating>
                    <div>
                      {rating}
                      <ButtonResume />
                    </div>
                  </TdRating>
                )}
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
                    <Text>There are no books</Text>
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
