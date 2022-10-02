import InfoModal from "./InfoModal";
import LibraryForm from "./LibraryForm.js";
import { LibrarySection } from "./Library.styled";
import BooksListMarkup from "../../components/BooksListMarkup/BooksListMarkup";

export default function Library() {
  return (
    <>
      <LibrarySection>
        <LibraryForm></LibraryForm>
        <InfoModal></InfoModal>
        <BooksListMarkup></BooksListMarkup>
      </LibrarySection>
    </>
  );
}
