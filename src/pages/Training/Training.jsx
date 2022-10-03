import { useState } from "react";
import Chart from "../../components/Chart/Chart";
import NumberBooks from "../../components/NumberBooks/NumberBooks.jsx";
import RoundButton from "../../components/RoundButton/RoundButton";
import TrainingAddBookModal from "../../components/TrainingAddBookModal/TrainingAddBookModal";
import BooksListTraining from "../../components/BooksListTraining/BooksListTraining";
import Result from "../../components/Result/Result";
import ClockTimes from "../../components/Clock/index";
import StartTrainingBtn from "../../components/StartTrainingBtn/StartTrainingBtn";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import {
  Section,
  DesktopTrainingWrapper,
  TrainingContent,
  SideBar,
} from "./Training.styled";

export default function Training() {
  const [isTrainingAddBookShown, setIsTrainingAddBookShown] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const openModal = () => {
    setIsTrainingAddBookShown(!isTrainingAddBookShown);
  };

  return (
    <Section>
      {isMobile && (
        <>
          <ClockTimes />
          <NumberBooks />
          <BooksListTraining />
          <StartTrainingBtn />
          <Chart />
          <RoundButton openModal={openModal} />
          <TrainingAddBookModal
            isTrainingAddBookShown={isTrainingAddBookShown}
            setIsTrainingAddBookShown={setIsTrainingAddBookShown}
          />
          <Result />
        </>
      )}
      {isTablet && (
        <>
          <ClockTimes />
          <NumberBooks />
          <BooksListTraining />
          <StartTrainingBtn />
          <Chart />
          <Result />
        </>
      )}
      {isDesktop && (
        <DesktopTrainingWrapper>
          <TrainingContent>
            <ClockTimes />
            <BooksListTraining />
            <StartTrainingBtn />
            <Chart />
          </TrainingContent>
          <SideBar>
            <NumberBooks />
            <Result />
          </SideBar>
        </DesktopTrainingWrapper>
      )}
    </Section>
  );
}
