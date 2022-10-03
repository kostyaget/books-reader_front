import styled from "styled-components";
import { device } from "../device/device";

export const GoalContainer = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-weight: 100;

  @media screen and ${device.mobileS} and (max-width: 767px) {
    width: 280px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and ${device.tablet} {
    width: 280px;
    margin-left: 32px;
  }
  @media screen and ${device.laptop} {
    margin-left: 74px;
  }
`;

export const GoalTitle = styled.h2`
  margin: 20px 0px 5px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #898f9f;
  display: block;
`;

export const GoalCountdownTime = styled.span`
  padding: 5px;
  border-radius: 3px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;

  color: #091e3f;
`;

export const GoalText = styled.span`
  padding-top: 5px;
  margin-left: 40px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;

  color: #898f9f;
`;

export const GoalItemTime = styled.div`
  margin-left: -40px;
`;

export const GoalBackground = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
`;

export const GoalGeneralClass = styled.div`
  margin-bottom: 40px;

  @media screen and ${device.tablet} and (max-width: 1023px) {
    width: 612px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and ${device.laptop} {
    width: 654px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
`;
