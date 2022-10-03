// Не используемые импорты
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "./redux/auth/auth";

// Authorization закоментированны руты, если разкометить ошибки по 45 строчке
import Library from "./pages/Library/Library";
import Header from "./components/Header/Header";
// import Registration from "./pages/registration/registration";
// import Login from "./pages/login/login";

import Login from "./components/Hero/login";
import RegistrationSection from "./components/Hero/registrationForm";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/library" element={<Library />} />
        <Route path="/training" element={<Library />} />
        {/* <Route path="/registration" element={<Registration />}></Route> */}
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<RegistrationSection />}></Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <RegistrationSection />
    </>
  );
};

export default App;
