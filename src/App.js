import Library from "./pages/Library/Library";
import Header from "./components/Header/Header";

import Training from "./pages/Training/Training";

import Login from "./components/Hero/login";
import RegistrationSection from "./components/Hero/registrationForm";

import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/library" element={<Library />} />
        <Route path="/training" element={<Training />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<RegistrationSection />}></Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
