import BooksListMarkup from "../BooksListMarkup/BooksListMarkup";
import { Container, Section } from "./LibraryAllCategories.styled";
import BOOKSLIST_DATA_TEST from "../BooksListMarkup/BOOKSLIST_DATA_TEST.json";

export default function LibraryAllCategories({
  listAllCategories = BOOKSLIST_DATA_TEST,
}) {
  let completedList = [];
  let inprogressList = [];
  let nexList = [];
  listAllCategories.forEach((el) => {
    if (el.status === "completed") {
      completedList.push(el);
    }
    if (el.status === "inprogress") {
      inprogressList.push(el);
    }
    if (el.status === "nex") {
      nexList.push(el);
    }
  });

  return (
    <>
      <Section>
        <Container>
          {/* Already read */}
          {completedList.length > 0 && (
            <BooksListMarkup
              titleSection={"Already read"}
              alreadyReadList={true}
              list={completedList}
            />
          )}
          {/* Reading now */}
          {inprogressList.length > 0 && (
            <BooksListMarkup
              titleSection={"Reading now"}
              alreadyReadList={false}
              list={inprogressList}
            />
          )}
          {/* Going to read */}
          {nexList.length > 0 && (
            <BooksListMarkup
              titleSection={"Going to read "}
              alreadyReadList={false}
              list={nexList}
            />
          )}
        </Container>
      </Section>
    </>
  );
}
