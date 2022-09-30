import InfoModal from "./InfoModal";
import LibraryForm from "./LibraryForm.js";
import { LibrarySection } from "./Library.styled";

export default function Library() {
  return (
    <>
      <LibrarySection>
        <LibraryForm></LibraryForm>
        <InfoModal></InfoModal>
      </LibrarySection>
    </>
  );
}
