import { Button, Icon } from "./RoundButton.styled";

export default function RoundButton({ openModal }) {
  return (
    <Button onClick={openModal}>
      <Icon width="16px" height="16px" />
    </Button>
  );
}
