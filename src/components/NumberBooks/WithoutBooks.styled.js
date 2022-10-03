import styled from "styled-components";
import { device } from "../device/device";

export const Goal = styled.div`
  background: #b1b5c2;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.mobileS} and (max-width: 767px) {
    max-width: 280px;
    height: 60px;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    width: 275px;
    max-height: 60px;
    margin: 23px 71px 23px 28px;
  }
  @media ${device.laptop} {
    max-width: 288px;
    height: 60px;
  }
`;

export const Number = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 38px;
  color: #091e3f;
`;
export const RoomArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
  @media ${device.mobileS} {
    width: 100px;
    height: 100px;
  }
  @media ${device.tablet} {
    width: 100px;
    height: 60px;
  }
  @media ${device.laptop} {
    width: 100px;
    height: 100px;
  }
`;
export const TextNumber = styled.p`
  margin-left: auto;
  margin-right: auto;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  text-align: center;
  color: #898f9f;
  @media ${device.mobileS} and (max-width: 767px) {
    margin-top: 14px;
    width: 66px;
    height: 34px;
    font-size: 14px;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    margin-top: 4px;
    font-size: 11px;
    line-height: 13px;
  }
  @media ${device.laptop} {
    margin-top: 14px;
    width: 57px;
    height: 30px;
  }
`;
export const TextTitle = styled.p`
  width: 220px;
  height: 24px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
`;

export const ResultItem = styled.ul`
  display: flex;
`;



// ------------------------------------------

export const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);

  @media ${device.mobileS} and (max-width: 767px) {
    max-width: 280px;
    max-height: 296px;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    max-width: 704px;
    max-height: 105px;
    display: flex;
  }
  @media ${device.laptop} {
    width: 288px;
    max-height: 329px;
  }
`;

export const ListNumbers = styled.li`
  list-style-type: none;

  @media ${device.mobileS} and (max-width: 767px) {
    margin-top: 44px;
    margin-bottom: 44px;
    width: 100px;
    margin-left: 30px;
    margin-right: -10px;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    margin-left: 40px;
    margin-top: 20px;
    margin-bottom: 8px;
  }
  @media ${device.laptop} {
    margin-top: 48px;
    margin-bottom: 48px;
    width: 100px;
    margin-left: 34px;
    margin-right: -14px;
  }
`;
