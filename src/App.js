import Header from "./components/Header";
import Hero from "./components/Hero/hero";
import NumberBooks from "./components/NumberBooks/NumberBooks.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/Hero" element={<Hero />} />
          <Route path="/StartTraining" element={<NumberBooks />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
