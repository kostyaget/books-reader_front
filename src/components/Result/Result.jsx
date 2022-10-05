import { useSelector } from "react-redux";
import ResultForm from "./ResultForm/ResultForm";
import PagesStats from "../PagesStats/PagesStats";
import { useFetchUserDataQuery } from "../../redux/users/usersApi";
import { selectCurrentUser } from "../../redux/auth/auth";
import { Section, Title } from "./Result.styled";

export default function Result() {
  const { data } = useFetchUserDataQuery();
  const user = useSelector(selectCurrentUser);

  return (
    <>
      <Section>
        <Title>Result</Title>
        {user && <ResultForm />}
        {data && <PagesStats />}
      </Section>
    </>
  );
}
