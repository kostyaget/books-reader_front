import { ReactComponent as Arrow } from "../../images/backArrow.svg";
import MyTraining from "../MyTraining/MyTraining";
import {
  ModalBackDrop,
  ModalWrapper,
  Button,
} from "./TrainingAddBookModal.styled";

export default function TrainingAddBookModal({
  isTrainingAddBookShown,
  setIsTrainingAddBookShown,
}) {
  return (
    <>
      {isTrainingAddBookShown && (
        <ModalBackDrop>
          <ModalWrapper>
            <Button
              onClick={() => setIsTrainingAddBookShown(!isTrainingAddBookShown)}
            >
              <Arrow />
            </Button>
            <MyTraining />
          </ModalWrapper>
        </ModalBackDrop>
      )}
    </>
  );
}
