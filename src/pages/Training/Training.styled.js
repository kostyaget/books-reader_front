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
    width: 1200px;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
export const DesktopTrainingWrapper = styled.div`
  display: flex;
  gap: 30px;
`;
export const TrainingContent = styled.div`
  flex-grow: 1;
`;
export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
`;
