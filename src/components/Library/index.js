import InfoModal from "./InfoModal";
import LibraryForm from "./LibraryForm.js";
import { LibrarySecrion } from "./Library.styled";

export default function Library() {
  return (
    <>
      <LibrarySecrion>
        <LibraryForm></LibraryForm>
        <InfoModal></InfoModal>
      </LibrarySecrion>
    </>
  );
}
