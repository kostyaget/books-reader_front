import { useState } from "react";
import Chart from "../../components/Chart/Chart";
import NumberBooks from "../../components/NumberBooks/NumberBooks.jsx";
import RoundButton from "../../components/RoundButton/RoundButton";
import TrainingAddBookModal from "../../components/TrainingAddBookModal/TrainingAddBookModal";
import Result from "../../components/Result/Result";
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
  const isTabletS = useMediaQuery("(min-width: 768px)");
  const isTabletL = useMediaQuery("(max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const openModal = () => {
    setIsTrainingAddBookShown(!isTrainingAddBookShown);
  };

  return (
    <Section>
      {isMobile && (
        <>
          <NumberBooks />
          <Chart />
          <RoundButton openModal={openModal} />
          <TrainingAddBookModal
            isTrainingAddBookShown={isTrainingAddBookShown}
            setIsTrainingAddBookShown={setIsTrainingAddBookShown}
          />
          <Result />
        </>
      )}
      {isTabletS && isTabletL && (
        <>
          <NumberBooks />
          <Chart />
          <Result />
        </>
      )}
      {isDesktop && (
        <DesktopTrainingWrapper>
          <TrainingContent>
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
