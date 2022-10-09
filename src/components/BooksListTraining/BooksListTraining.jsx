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
  // CheckboxIco,
  // CheckboxActiveIco,
  Text,
} from "./BooksListTraining.styled";
import PropTypes from "prop-types";
import EllipsisText from "react-ellipsis-text";
import DeleteButton from "./DeleteButton";
import CheckboxTraning from "./CheckboxTraning/CheckboxTraning";
import { useFetchTrainingsDataQuery } from "../../redux/trainings/trainingsApi";

export default function BooksListTraining({ training = false, isAlready }) {
  const { data } = useFetchTrainingsDataQuery();
  // console.log(data?.data);
  let empty = false;
  if (!data?.data?.length) {
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
          {data?.data?.map(({ _id = "007", book = [] }) => (
            <TrbodyTraining key={_id}>
              <TdBookTitle>
                <FirstColumn>
                  <IconContainer>
                    {!training && <LibraryIco />}
                    {/* {training && !read && <CheckboxIco />} */}
                    {training && (
                      <CheckboxTraning
                        id={book._id}
                        statusBook={book.status}
                        idTraning={_id}
                        isAlready={isAlready}
                      />
                    )}
                    {/* {training && read && <CheckboxActiveIco />} */}
                  </IconContainer>
                  <div>
                    <Text>
                      <EllipsisText text={book.title} length={40} />
                    </Text>
                    {/* mobile table start */}
                    <MobileTableWrapper>
                      <TableMobile>
                        <TbodyMobile>
                          <TrMobile>
                            <ThMobile>Author:</ThMobile>
                            <TdMobile>
                              <EllipsisText text={book.author} length={20} />
                            </TdMobile>
                          </TrMobile>
                          <TrMobile>
                            <ThMobile>Year:</ThMobile>
                            <TdMobile>
                              {book.publishingDate.slice(0, 4)}
                            </TdMobile>
                          </TrMobile>
                          <TrMobile>
                            <ThMobile>Pages:</ThMobile>
                            <TdMobile>{book.pageAmount}</TdMobile>
                          </TrMobile>
                        </TbodyMobile>
                      </TableMobile>
                    </MobileTableWrapper>
                    {/* mobile table end */}
                  </div>
                </FirstColumn>
              </TdBookTitle>
              <TdAuthor>
                <EllipsisText text={book.author} length={20} />
              </TdAuthor>
              <TdYear>{book.publishingDate.slice(0, 4)}</TdYear>
              <TdPages>{book.pageAmount}</TdPages>
              {!training && (
                <TdDelete>
                  <DeleteButton idTraning={_id} idBook={book._id} />
                </TdDelete>
              )}
            </TrbodyTraining>
          ))}
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
  training: PropTypes.bool,
};
