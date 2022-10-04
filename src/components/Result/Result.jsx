// import { useState } from "react";
import ResultForm from "./ResultForm/ResultForm";
import PagesStats from "../PagesStats/PagesStats";
import { useFetchUserDataQuery } from "../../redux/users/usersApi";
import { Section, Title } from "./Result.styled";

export default function Result() {
  // const [isModalOpen, setModalOpen] = useState(false);
  const { data } = useFetchUserDataQuery();

  // const openModal = () => {
  //   setModalOpen(!isModalOpen);
  // };

  return (
    <>
      <Section>
        <Title>Result</Title>
        <ResultForm />
        {data && <PagesStats />}
      </Section>
    </>
  );
}
