import Header from "./components/Header";
import Hero from "./components/Hero/hero";
import Library from "./components/Library";
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
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/Hero" element={<Hero />} />
          <Route path="/library" element={<Library />} />
          {/* <Route path="/StartTraining" element={<NumberBooks />} /> */}
        </Route>
      </Routes>
      <Hero />
    </>
  );
};

export default App;
