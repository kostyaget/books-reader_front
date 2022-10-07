import BooksListMarkup from "../BooksListMarkup/BooksListMarkup";
import { Container, Section, NoBooks } from "./LibraryAllCategories.styled";
import { useFetchUserDataQuery } from "../../redux/users/usersApi";


export default function LibraryAllCategories() {
  const { data } = useFetchUserDataQuery();
  // console.log(data?.user.books);
  const listAllCategories = data?.user.books;
  // console.log(listAllCategories);
  let completedList = [];
  let inprogressList = [];
  let nexList = [];
  listAllCategories?.forEach((el) => {
    if (el.status === "completed") {
      completedList.push(el);
    }
    if (el.status === "inprogress") {
      inprogressList.push(el);
    }
    if (el.status === "next") {
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
          {completedList.length < 1 &&
            inprogressList.length < 1 &&
            nexList.length < 1 && (
              <NoBooks>Here will be a list of your books</NoBooks>
            )}
        </Container>
      </Section>
    </>
  );
}
