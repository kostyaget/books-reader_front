import { Button } from "./StartTrainingBtn.styled";

export default function StartTrainingBtn({ openStatistics }) {
  const hadleClick = () => {
    openStatistics();
  };
  return (
    <Button type="submit" onClick={hadleClick}>
      Start traininig
    </Button>
  );
}
