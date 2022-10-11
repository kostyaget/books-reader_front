import styled from "styled-components";
import { device } from "../../components/device/device";

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;

  @media ${device.tablet} and (max-width: 1023px) {
    padding-top: 30px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${device.laptop} {
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
export const DesktopTrainingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const MyTrainingWarp = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  width: 928px;
`;

export const TrainingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  gap: 30px;
`;
export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
