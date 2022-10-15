import { useFetchUserDataQuery } from "../../redux/users/usersApi";
import ResultForm from "./ResultForm/ResultForm";
import PagesStats from "../PagesStats/PagesStats";
import { Section, Title } from "./Result.styled";

export default function Result({ userId, clearListBook, dataTrainingBook }) {
  const { data } = useFetchUserDataQuery();
  const user = userId;

  return (
    <>
      <Section>
        <Title>Result</Title>
        {user && (
          <ResultForm
            userId={userId}
            clearListBook={clearListBook}
            dataTrainingBook={dataTrainingBook}
          />
        )}
        {data && <PagesStats />}
      </Section>
    </>
  );
}
