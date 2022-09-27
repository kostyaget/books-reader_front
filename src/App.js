import Header from "./components/Header";
import Hero from "./components/Hero/hero";
import NumberBooks from "./components/NumberBooks/NumberBooks.jsx";
import { Routes, Route } from "react-router-dom";
import Modal from "./modal/modal.jsx";
import React, { useState } from "react";

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      {/* <button onClick={() => setModalActive(true)}>
        Открыть модальное окно
      </button> */}
      <Modal active={modalActive} setActive={setModalActive} />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/Hero" element={<Hero />} />
          <Route path="/StartTraining" element={<NumberBooks />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
