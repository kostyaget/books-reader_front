import styled from "styled-components";
import { device } from "../device/device";

export const Rating = styled.p`

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;

text-align: center;
color: #242A37;

  @media ${device.mobileS} {
    margin: 28px 2px 0 2px;
    width: 237px;
    height: 66px;
  }
`;

export const Btn = styled.button`
  width: 98px;
  height: 40px;
  background: #ffffff;
  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
  color: #242a37;
  border: 1px solid #242a37;

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #242a37;
    background: #ff6b08;
    cursor: pointer;
    color: #fff;
  }
`;

export const BtnColor = styled.button`
  width: 98px;
  height: 40px;
  background: #ff6b08;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  border: none;

  @media screen and ${device.mobileS} and (max-width: 767px) {
    margin-left: 16px;
  }
  @media screen and ${device.tablet} {
    margin-left: 28px;
  }

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #242a37;
    border: trye;
    color: #242a37;
    background: rgba(0, 0, 0, 0);
    cursor: pointer;
  }
`;

export const ItemBtn = styled.div`
  margin: 20px 35px 40px 35px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #ffffff;
//   box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
  @media screen and ${device.mobileS} and (max-width: 767px) {
    max-width: 280px;
    max-height: 222px;
  }
  @media screen and ${device.tablet} {
    max-width: 394px;
    max-height: 204px;
  }
`;
