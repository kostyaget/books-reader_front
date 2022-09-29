import ResultForm from "./ResultForm/ResultForm";
import PagesStats from "../PagesStats/PagesStats";
import { Section, Title } from "./Result.styled";

export default function Result() {
  return (
    <Section>
      <Title>Result</Title>
      <ResultForm />
      <PagesStats />
    </Section>
  );
}
