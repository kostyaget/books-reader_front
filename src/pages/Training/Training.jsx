import { useState } from "react";
import Chart from "../../components/Chart/Chart";
import WithBooks from "../../components/NumberBooks/WithBooks";
import WithoutBooks from "../../components/NumberBooks/WithoutBooks";
import RoundButton from "../../components/RoundButton/RoundButton";
import TrainingAddBookModal from "../../components/TrainingAddBookModal/TrainingAddBookModal";
import MyTraining from "../../components/MyTraining/MyTraining";
import BooksListTraining from "../../components/BooksListTraining/BooksListTraining";
import Result from "../../components/Result/Result";
import ClockTimes from "../../components/Clock/index";
import StartTrainingBtn from "../../components/StartTrainingBtn/StartTrainingBtn";
import { useFetchTrainingsDataQuery } from "../../redux/trainings/trainingsApi";
import { useFetchUserDataQuery } from "../../redux/users/usersApi";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import {
  Section,
  DesktopTrainingWrapper,
  TrainingContent,
  SideBar,
  MyTrainingWarp,
} from "./Training.styled";

// ------------------------------

export default function Training() {
  const [isTrainingAddBookShown, setIsTrainingAddBookShown] = useState(false);
  const [isTrainingActive, setIsTrainingActive] = useState(false);
  const { data } = useFetchTrainingsDataQuery();
  const userDate = useFetchUserDataQuery();

  const progressDate = userDate?.data?.user?.info?.progress.map(
    (i) => i.trainingDate
  );
  const progressPage = userDate?.data?.user?.info?.progress.map(
    (e) => e.pagesAmount
  );
  const pageSummary = userDate?.data?.user?.info?.progress.reduce(
    (a, e, i) => a.concat(i === 0 ? e.pagesAmount : e.pagesAmount + a.at(-1)),
    []
  );
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const openModal = () => {
    setIsTrainingAddBookShown(!isTrainingAddBookShown);
  };
  const openStatistics = () => {
    setIsTrainingActive(!isTrainingActive);
  };
  return (
    <Section>
      {isMobile && !isTrainingActive && (
        <>
          <WithoutBooks />
          <BooksListTraining />
          {data?.data.length > 0 && (
            <StartTrainingBtn openStatistics={openStatistics} />
          )}
          <Chart />
          <RoundButton openModal={openModal} />
          <TrainingAddBookModal
            isTrainingAddBookShown={isTrainingAddBookShown}
            setIsTrainingAddBookShown={setIsTrainingAddBookShown}
          />
        </>
      )}
      {isMobile && isTrainingActive && (
        <>
          <ClockTimes />
          <WithBooks />
          <BooksListTraining />
          <Chart />
          <Result />
        </>
      )}

      {isTablet && !isTrainingActive && (
        <>
          <WithoutBooks />
          <MyTraining />
          <BooksListTraining />
          {data?.data.length > 0 && (
            <StartTrainingBtn openStatistics={openStatistics} />
          )}
          <Chart />
        </>
      )}
      {isTablet && isTrainingActive && (
        <>
          <ClockTimes />
          <WithBooks />
          <BooksListTraining />
          <Chart />
          <Result />
        </>
      )}
      {isDesktop && !isTrainingActive && (
        <DesktopTrainingWrapper>
          <MyTrainingWarp>
            <TrainingContent>
              <MyTraining />
              <BooksListTraining />
              {data?.data.length > 0 && (
                <StartTrainingBtn openStatistics={openStatistics} />
              )}
              <Chart />
            </TrainingContent>
          </MyTrainingWarp>
          <SideBar>
            <WithoutBooks />
          </SideBar>
        </DesktopTrainingWrapper>
      )}
      {isDesktop && isTrainingActive && (
        <DesktopTrainingWrapper>
          <MyTrainingWarp>
            <TrainingContent>
              <ClockTimes />
              <BooksListTraining />
              <Chart
                labelsData={progressDate}
                actData={pageSummary}
                planData={progressPage}
              />
            </TrainingContent>
          </MyTrainingWarp>
          <SideBar>
            <WithBooks />
            <Result />
          </SideBar>
        </DesktopTrainingWrapper>
      )}
    </Section>
  );
}
