import { useState } from "react";
import Chart from "../../components/Chart/Chart";
// import WithBooks from "../../components/NumberBooks/WithBooks";
import WithoutBooks from "../../components/NumberBooks/WithoutBooks";
import RoundButton from "../../components/RoundButton/RoundButton";
import TrainingAddBookModal from "../../components/TrainingAddBookModal/TrainingAddBookModal";
import MyTraining from "../../components/MyTraining/MyTraining";
import BooksListTraining from "../../components/BooksListTraining/BooksListTraining";
// import Result from "../../components/Result/Result";
// import ClockTimes from "../../components/Clock/index";
import StartTrainingBtn from "../../components/StartTrainingBtn/StartTrainingBtn";
import { useFetchTrainingsDataQuery } from "../../redux/trainings/trainingsApi";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import {
  Section,
  DesktopTrainingWrapper,
  TrainingContent,
  SideBar,
  MyTrainingWarp,
} from "./Training.styled";

// ------------------------------
// import ExitModal from '../../components/Modal/ExitModal'

export default function Training() {
  const [isTrainingAddBookShown, setIsTrainingAddBookShown] = useState(false);
  const { data } = useFetchTrainingsDataQuery();

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
          <WithoutBooks />
          <BooksListTraining />
          {data?.data.length > 0 && <StartTrainingBtn />}
          <Chart />
          <RoundButton openModal={openModal} />
          <TrainingAddBookModal
            isTrainingAddBookShown={isTrainingAddBookShown}
            setIsTrainingAddBookShown={setIsTrainingAddBookShown}
          />
        </>
      )}
      {/* {isMobile && data?.data.length > 0 && (
        <>
          <ClockTimes />
          <WithBooks />
          <BooksListTraining />
          <Chart />
          <Result />
        </>
      )} */}

      {isTablet && (
        <>
          <WithoutBooks />
          <MyTraining />
          <BooksListTraining />
          {data?.data.length > 0 && <StartTrainingBtn />}
          <Chart />
        </>
      )}
      {/* {isTablet && data?.data.length > 0 && (
        <>
          <ClockTimes />
          <WithBooks />
          <BooksListTraining />
          <Chart />
          <Result />
        </>
      )} */}
      {isDesktop && (
        <DesktopTrainingWrapper>
          <MyTrainingWarp>
            <TrainingContent>
              <MyTraining />
              <BooksListTraining />
              {data?.data.length > 0 && <StartTrainingBtn />}
              <Chart />
            </TrainingContent>
          </MyTrainingWarp>
          <SideBar>
            <WithoutBooks />
          </SideBar>
        </DesktopTrainingWrapper>
      )}
      {/* {isDesktop && data?.data[0].status && (
        <DesktopTrainingWrapper>
          <MyTrainingWarp>
            <TrainingContent>
              <ClockTimes />
              <BooksListTraining />
              <Chart />
            </TrainingContent>
          </MyTrainingWarp>
          <SideBar>
            <WithBooks />
            <Result />
          </SideBar>
        </DesktopTrainingWrapper>
      )} */}
    </Section>
  );
}
