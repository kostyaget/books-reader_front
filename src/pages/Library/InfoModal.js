import {
  ІnfModal,
  InfoPreTitle,
  InfoTitle,
  InfoText,
  InfoTextWrapp,
  InfoList,
  InfoItem,
  InfoBtn,
} from './InfoModal.styled';
import { useState } from 'react';

import { ReactComponent as Flag } from '../../images/home.svg';
import { ReactComponent as Arrw } from '../../images/arrw.svg';
import { ReactComponent as Book } from '../../images/book.svg';

export default function InfoModal() {
  const [active, setActive] = useState(true);
  const onStart = () => {
    setActive(false);
  };
  return (
    <>
      <ІnfModal style={active ? { display: 'block' } : { display: 'none' }}>
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
        <InfoBtn type='button' onClick={onStart}>Ok</InfoBtn>
      </ІnfModal>
    </>
  );
}
