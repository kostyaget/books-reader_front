import InfoModal from "../../components/Modal/InfoModal";
import LibraryForm from "../../components/LibraryForm/LibraryForm";
import { LibrarySection } from "./Library.styled";
import LibraryAllCategories from "../../components/LibraryAllCategories/LibraryAllCategories";
import { selectCurrentUserBook } from "../../redux/auth/auth";
import { useSelector } from "react-redux";
export default function Library() {
  const isBook = useSelector(selectCurrentUserBook);
  return (
    <>
      <LibrarySection>
        <LibraryForm></LibraryForm>
        {isBook ? <InfoModal></InfoModal> : <LibraryAllCategories />}
      </LibrarySection>
    </>
  );
}
