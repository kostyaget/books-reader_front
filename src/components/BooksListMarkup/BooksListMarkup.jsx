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
  TdMobileButton,
  TdMobile,
  FirstColumn,
  IconContainer,
  LibraryIco,
  LibraryActiveIco,
  Text,
  RatingWrapper,
} from "./BooksListMarkup.styled";
import PropTypes from "prop-types";
import EllipsisText from "react-ellipsis-text";
import ButtonResume from "./ButtonResume/ButtonResume";
import RatingStars from "../RatingStars/RatingStars";

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
              _id = "0",
              status = "completed",
              title = "",
              author = "",
              publishingDate = 0,
              pageAmount = 0,
              rating = 0,
              summary = "",
            }) => (
              <Trbody key={_id}>
                <TdBookTitle>
                  <FirstColumn>
                    <IconContainer>
                      {status !== "inprogress" && <LibraryIco />}
                      {status === "inprogress" && <LibraryActiveIco />}
                      {/* {status === "next" && <LibraryIco />} */}
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
                            {alreadyReadList && (
                              <TrMobile>
                                <ThMobile>Rating:</ThMobile>
                                <TdMobile>
                                  <RatingStars rating={rating} id={_id} />
                                </TdMobile>
                              </TrMobile>
                            )}
                            {alreadyReadList && (
                              <TrMobile>
                                <TdMobileButton>
                                  <ButtonResume
                                    id={_id}
                                    rating={rating}
                                    summaryBook={summary}
                                  />
                                </TdMobileButton>
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
                <TdYear>{publishingDate.slice(0, 4)}</TdYear>
                <TdPages>{pageAmount}</TdPages>
                {alreadyReadList && (
                  <TdRating>
                    <RatingWrapper>
                      <RatingStars rating={rating} id={_id} />
                      <ButtonResume
                        id={_id}
                        rating={rating}
                        summaryBook={summary}
                      />
                    </RatingWrapper>
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
  titleSection: PropTypes.string,
  alreadyReadList: PropTypes.bool,
  list: PropTypes.array,
};
