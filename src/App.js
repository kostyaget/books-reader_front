import Header from "./components/Header/Header";
import Hero from "./components/Hero/hero";
import Library from "./components/Library/Library";
import { Route, Routes } from "react-router-dom";

// import NumberBooks from './components/NumberBooks/NumberBooks.jsx'

const App = () => {
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
        <Route path="/library" element={<Library />} />
        {/* <Route path="/StartTraining" element={<NumberBooks />} /> */}
      </Routes>
    </>
  );
};

export default App;
