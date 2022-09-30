import Header from "./components/Header/Header";
import Hero from "./components/Hero/hero";
import RegistrationSection from "./components/Hero/registrationForm";
import Library from "./pages/Library/Library";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/auth";

// import NumberBooks from './components/NumberBooks/NumberBooks.jsx'

const App = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    isLoggedIn && navigate("/library");
  }, [isLoggedIn, navigate]);
  // const [modalActive, setModalActive] = useState(false);
  return (
    <>
      {/* <button onClick={() => setModalActive(true)}>
        Открыть модальное окно
      </button> */}
      {/* <Modal active={modalActive} setActive={setModalActive} /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/" element={<RegistrationSection />} /> */}
        <Route path="/library" element={<Library />} />
        {/* <Route path="/StartTraining" element={<NumberBooks />} /> */}
      </Routes>
    </>
  );
};

export default App;
