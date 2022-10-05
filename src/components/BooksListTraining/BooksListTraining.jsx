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
import { useFetchUserDataQuery } from "../../redux/users/usersApi";

export default function BooksListTraining({ training = false }) {
  const { data } = useFetchUserDataQuery();
  console.log(data);
  const inprogressList = data?.user.books.filter(
    (el) => el.status === "inprogress"
  );
  console.log(inprogressList);
  const list = inprogressList ? inprogressList : [];
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
              _id = "0",
              title = "",
              author = "",
              publishingDate = 0,
              pageAmount = 0,
              status,
            }) => (
              <TrbodyTraining key={_id}>
                <TdBookTitle>
                  <FirstColumn>
                    <IconContainer>
                      {!training && <LibraryIco />}
                      {/* {training && !read && <CheckboxIco />} */}
                      {training && (
                        <CheckboxTraning id={_id} statusBook={status} />
                      )}
                      {/* {training && read && <CheckboxActiveIco />} */}
                    </IconContainer>
                    <div>
                      <Text>
                        <EllipsisText text={title} length={40} />
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
                              <TdMobile>{publishingDate.slice(0, 4)}</TdMobile>
                            </TrMobile>
                            <TrMobile>
                              <ThMobile>Pages:</ThMobile>
                              <TdMobile>{pageAmount}</TdMobile>
                            </TrMobile>
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
                <TdYear>{publishingDate.slice(0, 4)}</TdYear>
                <TdPages>{pageAmount}</TdPages>
                {!training && (
                  <TdDelete>
                    <DeleteButton idBook={_id} />
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
  list: PropTypes.array,
  training: PropTypes.bool,
};
