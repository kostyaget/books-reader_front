import {
  ІnfModal,
  InfoPreTitle,
  InfoTitle,
  InfoText,
  InfoTextWrapp,
  InfoList,
  InfoItem,
  InfoBtn,
} from "./InfoModal.styled";
import { ReactComponent as Flag } from "../../images/flag.svg";
import { ReactComponent as Arrw } from "../../images/arrw.svg";
import { ReactComponent as Book } from "../../images/book.svg";

export default function InfoModal() {
  return (
    <>
      <ІnfModal>
        <InfoList>
          <InfoItem>
            <InfoPreTitle>Step 1.</InfoPreTitle>
            <InfoTitle>
              <Book /> Create your own library
            </InfoTitle>
            <InfoTextWrapp>
              <InfoText>
                <Arrw></Arrw> Add there books which you are going to read.
              </InfoText>
            </InfoTextWrapp>
          </InfoItem>
          <InfoItem>
            <InfoPreTitle>Step 2.</InfoPreTitle>
            <InfoTitle>
              <Flag width="22px" /> Create your first training
            </InfoTitle>
            <InfoTextWrapp>
              <InfoText>
                <Arrw width="22px"></Arrw> Set a goal, choose period, start
                training.
              </InfoText>
            </InfoTextWrapp>
          </InfoItem>
        </InfoList>
        <InfoBtn>Ok</InfoBtn>
      </ІnfModal>
    </>
  );
}
