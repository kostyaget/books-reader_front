import InfoModal from "../../components/Modal/InfoModal";
import LibraryForm from "../../components/LibraryForm/LibraryForm";
import LibraryFormMobail from "../../components/LibraryForm/LibraryFormMobail";
import { LibrarySection, ToFormBtn, LibraryBnt } from "./Library.styled";
import LibraryAllCategories from "../../components/LibraryAllCategories/LibraryAllCategories";
import { selectCurrentUserBook } from "../../redux/auth/auth";
import { useSelector } from "react-redux";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import { ReactComponent as Plus } from "../../images/IconP.svg";
import { useState } from "react";

// import queryString from "query-string";
// import { useLocation } from "react-router-dom";
// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { googleLogIn } from "../../redux/auth/auth";

export default function Library() {
  const [modalOpen, setModalOpen] = useState(true);
  const toggleModal = () => {
    setModalOpen((state) => !state);
  };

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isBook = useSelector(selectCurrentUserBook);

  // const location = useLocation();
  // const query = queryString.parse(location.search);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (query.token) {
  //     const { name, email, token } = query;
  //     const user = { name, email };
  //     dispatch(googleLogIn({ user, token }));
  //   }
  // });

  return (
    <>
      {isMobile && (
        <>
          <LibrarySection>
            {modalOpen && (
              <LibraryFormMobail onClose={toggleModal}></LibraryFormMobail>
            )}
            {isBook ? <InfoModal></InfoModal> : <LibraryAllCategories />}
            <LibraryBnt to="/training">My training</LibraryBnt>
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
            <LibraryBnt to="/training">My training</LibraryBnt>
          </LibrarySection>
        </>
      )}
    </>
  );
}
