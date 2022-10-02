import BooksListMarkup from "../BooksListMarkup/BooksListMarkup";
import {
  CategoriesWrapper,
  Container,
  Section,
} from "./LibraryAllCategories.styled";
import BOOKSLIST_DATA_TEST from "../BooksListMarkup/BOOKSLIST_DATA_TEST.json";

export default function LibraryAllCategories({
  listAllCategories = BOOKSLIST_DATA_TEST,
}) {
  let alreadyReadM = [];
  let readingNowM = [];
  let goingToReadM = [];
  listAllCategories.forEach((el) => {
    if (el.alreadyRead) {
      alreadyReadM.push(el);
    }
    if (el.readingNow) {
      readingNowM.push(el);
    }
    if (el.goingToRead) {
      goingToReadM.push(el);
    }
  });

  return (
    <>
      <Section>
        <Container>
          <CategoriesWrapper>
            <BooksListMarkup
              titleSection={"Already read"}
              alreadyReadList={true}
              list={alreadyReadM}
            />
          </CategoriesWrapper>
          <CategoriesWrapper>
            <BooksListMarkup
              titleSection={"Reading now"}
              alreadyReadList={false}
              list={readingNowM}
            />
          </CategoriesWrapper>
          <CategoriesWrapper>
            <BooksListMarkup
              titleSection={"Going to read "}
              alreadyReadList={false}
              list={goingToReadM}
            />
          </CategoriesWrapper>
        </Container>
      </Section>
    </>
  );
}
