// Не используемые импорты
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "./redux/auth/auth";


// Authorization закоментированны руты, если разкометить ошибки по 45 строчке
// import Library from "./pages/Library/Library";
// import Header from "./components/Header";
// import Hero from "./components/Hero/hero";
// import RegistrationSection from "./components/Hero/hero";
// import { Routes, Route } from "react-router-dom";

import NumberBooks from "./components/NumberBooks/NumberBooks.jsx";
import Modal from "./modal/modal.jsx";
import React, { useState } from "react";
import Resume from "./components/Modal/Resume.jsx";
import ExitModal from "./components/Modal/ExitModal.jsx";
import BookRead from "./components/Modal/BookRead.jsx";
import LateRead from "./components/Modal/LateRead.jsx";

const App = () => {
  const [modalActiveResume, setModalActiveResume] = useState(false);
  const [modalActiveExitModal, setModalActiveExitModal] = useState(false);
  const [modalActiveBookRead, setModalActiveBookRead] = useState(false);
  const [modalActiveLateRead, setModalActiveLateRead] = useState(false);
  return (
    <>
      <button onClick={() => setModalActiveResume(true)}>
        Открыть модальное окно Resume
      </button>
      <button onClick={() => setModalActiveExitModal(true)}>ExitModal</button>
      <button onClick={() => setModalActiveBookRead(true)}>BookRead</button>
      <button onClick={() => setModalActiveLateRead(true)}>LateRead</button>
      <Modal active={modalActiveResume} setActive={setModalActiveResume}>
        <Resume />
      </Modal>
      <Modal active={modalActiveExitModal} setActive={setModalActiveExitModal}>
        <ExitModal />
      </Modal>
      <Modal active={modalActiveBookRead} setActive={setModalActiveBookRead}>
        <BookRead />
      </Modal>
      <Modal active={modalActiveLateRead} setActive={setModalActiveLateRead}>
        <LateRead />
      </Modal>
      {/* <Hero /> */}
      <NumberBooks />
      {/* {<Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/" element={<RegistrationSection />} />
          <Route path="/library" element={<Library />} />
          <Route path="/StartTraining" element={<NumberBooks />}/>
      </Routes>} */}
    </>
  );
};

export default App;
