import InfoModal from "../../components/Modal/InfoModal";
import LibraryForm from "../../components/LibraryForm/LibraryForm";
import LibraryFormMobail from "../../components/LibraryForm/LibraryFormMobail";
import { LibrarySection } from "./Library.styled";
import LibraryAllCategories from "../../components/LibraryAllCategories/LibraryAllCategories";
import { selectCurrentUserBook } from "../../redux/auth/auth";
import { useSelector } from "react-redux";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ToFormBtn } from "../../components/LibraryForm/LibraryFormMobile.styled";
import { ReactComponent as Plus } from "../../images/IconP.svg";
import { useState } from "react";

export default function Library() {
  const [modalOpen, setModalOpen] = useState(true);
  const toggleModal = () => {
    setModalOpen((state) => !state);
  };

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const isBook = useSelector(selectCurrentUserBook);

  return (
    <>

      {isMobile && (
        <>
          <LibrarySection>
            {modalOpen && (
              <LibraryFormMobail onClose={toggleModal}></LibraryFormMobail>
            )}
            {isBook ? <InfoModal></InfoModal> : <LibraryAllCategories />}
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
            {isBook ? <InfoModal></InfoModal> : <LibraryAllCategories />}
          </LibrarySection>
        </>
      )}
    </>
  );
}
