import InfoModal from "../../components/Modal/InfoModal";
import LibraryForm from "../../components/LibraryForm/LibraryForm";
import LibraryFormMobail from "../../components/LibraryForm/LibraryFormMobail";
import { LibrarySection, ToFormBtn, LibraryBnt } from "./Library.styled";
import LibraryAllCategories from "../../components/LibraryAllCategories/LibraryAllCategories";
import { selectCurrentUser } from "../../redux/auth/auth";
import { useSelector } from "react-redux";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import { ReactComponent as Plus } from "../../images/IconP.svg";
import { useState } from "react";

export default function Library() {
  const [modalOpen, setModalOpen] = useState(true);
  const toggleModal = () => {
    setModalOpen((state) => !state);
  };

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const user = useSelector(selectCurrentUser);

  return (
    <>
      {isMobile && (
        <>
          <LibrarySection>
            {modalOpen && (
              <LibraryFormMobail onClose={toggleModal}></LibraryFormMobail>
            )}
            {user?.user?.books.length === 0 ? (
              <InfoModal></InfoModal>
            ) : (
              <LibraryAllCategories />
            )}
            {user?.user?.books.length > 0 && (
              <LibraryBnt to="/training">My training</LibraryBnt>
            )}
            <ToFormBtn onClick={toggleModal}>
              <Plus />
            </ToFormBtn>
          </LibrarySection>
        </>
      )}
      {isTablet && (
        <>
          <LibrarySection>
            <LibraryForm></LibraryForm>
            {user?.user?.books.length === 0 ? (
              <InfoModal></InfoModal>
            ) : (
              <LibraryAllCategories />
            )}
            {user?.user?.books.length > 0 && (
              <LibraryBnt to="/training">My training</LibraryBnt>
            )}
          </LibrarySection>
        </>
      )}
    </>
  );
}
