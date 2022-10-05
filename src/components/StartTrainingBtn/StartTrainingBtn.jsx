import { Button } from "./StartTrainingBtn.styled";

export default function StartTrainingBtn({ openStatistics }) {
  return (
    <Button type="submit" onClick={openStatistics}>
      Start traininig
    </Button>
  );
}
