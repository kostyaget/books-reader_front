import Library from "./pages/Library/Library";
import Header from "./components/Header/Header";
import Training from "./pages/Training/Training";
import { Suspense } from "react";
import Login from "./components/Hero/login";
import RegistrationSection from "./components/Hero/registrationForm";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import { useEffect } from "react";
import { useFetchUserDataQuery } from "./redux/users/usersApi";
import { useLogoutUserMutation } from "./redux/auth/authApi";
import { useDispatch } from "react-redux";

const App = () => {
  const currentUser = useFetchUserDataQuery();
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser) {
      dispatch(logoutUser());
    }
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />}></Route>
          </Route>
          <Route path="/registration" element={<RegistrationSection />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/library" element={<Library />}></Route>
            <Route path="/training" element={<Training />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
