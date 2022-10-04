import InfoModal from "./InfoModal";
import LibraryForm from "./LibraryForm.js";
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
