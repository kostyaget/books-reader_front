import {
  Wrapper,
  TableTraining,
  TrHead,
  THead,
  ThBookTitle,
  ThAuthor,
  ThYear,
  ThPages,
  ThDelete,
  Tbody,
  TrbodyTraining,
  TdBookTitle,
  TdEmpty,
  TdAuthor,
  TdYear,
  TdPages,
  TdDelete,
  MobileTableWrapper,
  TableMobile,
  TbodyMobile,
  TrMobile,
  ThMobile,
  TdMobile,
  FirstColumn,
  IconContainer,
  LibraryIco,
  CheckboxIco,
  CheckboxActiveIco,
  Text,
} from "./BooksListTraining.styled";
import PropTypes from "prop-types";
import EllipsisText from "react-ellipsis-text";
import BOOKSLIST_DATA_TEST from "../BooksListMarkup/BOOKSLIST_DATA_TEST.json";
import DeleteButton from "./DeleteButton";

const booksListBase = BOOKSLIST_DATA_TEST.filter((el) => el.goingToRead);

export default function BooksListTraining({ list = booksListBase, training }) {
  let empty = false;
  if (!list.length) {
    empty = true;
  }
  return (
    <Wrapper>
      <TableTraining>
        <THead>
          <TrHead>
            <ThBookTitle>Book title</ThBookTitle>
            <ThAuthor>Author</ThAuthor>
            <ThYear>Year</ThYear>
            <ThPages>Pages</ThPages>
            {!training && <ThDelete></ThDelete>}
          </TrHead>
        </THead>
        <Tbody>
          {list.map(
            ({
              id,
              goingToRead,
              book_name,
              author,
              year,
              pages,
              rating,
              read,
            }) => (
              <TrbodyTraining key={id}>
                <TdBookTitle>
                  <FirstColumn>
                    <IconContainer>
                      {!training && <LibraryIco />}
                      {training && !read && <CheckboxIco />}
                      {training && read && <CheckboxActiveIco />}
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
                            {/* {alreadyReadList && (
                              <TrMobile>
                                <ThMobile>Rating:</ThMobile>
                                <TdMobile>{rating}</TdMobile>
                              </TrMobile>
                            )} */}
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
                {!training && (
                  <TdDelete>
                    <DeleteButton />
                  </TdDelete>
                )}
              </TrbodyTraining>
            )
          )}
          {/* empty start */}
          {empty && (
            <TrbodyTraining>
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
              {!training && <TdDelete></TdDelete>}
            </TrbodyTraining>
          )}
          {/* empty end */}
        </Tbody>
      </TableTraining>
    </Wrapper>
  );
}

BooksListTraining.propTypes = {
  list: PropTypes.array.isRequired,
};

// how to connect
// import BooksListMarkup from './components/BooksListMarkup/BooksListMarkup';
// import BOOKSLIST_DATA_TEST from './components/BooksListMarkup/BOOKSLIST_DATA_TEST.json'

// <BooksListMarkup titleSection={titleSection} alreadyReadList={false} list={booksListBase} />
