import InfoModal from "../../components/Modal/InfoModal";
import LibraryForm from "../../components/LibraryForm/LibraryForm";
import { LibrarySection } from "./Library.styled";
import LibraryAllCategories from "../../components/LibraryAllCategories/LibraryAllCategories";

export default function Library() {
  return (
    <>
      <LibrarySection>
        <LibraryForm></LibraryForm>
        <InfoModal></InfoModal>
        <LibraryAllCategories />
      </LibrarySection>
    </>
  );
}
