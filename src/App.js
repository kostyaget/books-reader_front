import Library from "./pages/Library/Library";
import Header from "./components/Header/Header";
import Training from "./pages/Training/Training";
import { Suspense } from "react";
import Login from "./components/Hero/login";
import RegistrationSection from "./components/Hero/registrationForm";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import PrivateRoute from "./components/Routes/PrivateRoute";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectCurrentToken } from "./redux/auth/auth";
import { useEffect } from "react";

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isToken = useSelector(selectCurrentToken);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && isToken && navigate("/library");
  }, [isLoggedIn, navigate, isToken]);

  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<RegistrationSection />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/library" element={<Library />}></Route>
            <Route path="/training" element={<Training />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
      {/* <Routes>
        <Route path="/library" element={<Library />} />
        <Route path="/training" element={<Training />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<RegistrationSection />}></Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes> */}
    </>
  );
};

export default App;
