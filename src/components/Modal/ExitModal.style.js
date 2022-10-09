import styled from "styled-components";
import { device } from "../device/device";

export const Rating = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  color: #242a37;
  margin: 28px 2px 0 2px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.mobileS} {
    width: 237px;
    height: 66px;
  }
  @media screen and ${device.tablet} {
    width: 288px;
    height: 44px;
  }
`;

export const Btn = styled.button`
  width: 98px;
  height: 40px;
  background: #ffffff;
  color: #242a37;
  border: 1px solid #242a37;

  @media screen and ${device.tablet} {
    width: 130px;
    height: 40px;
  }

  &:hover,
  &:focus {
    border: 1px solid #242a37;
    background: #ff6b08;
    cursor: pointer;
    color: #fff;
  }
`;

export const BtnColor = styled.button`
  background: #ff6b08;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  border: none;

  @media screen and ${device.mobileS} and (max-width: 767px) {
    margin-left: 16px;
    width: 98px;
    height: 40px;
  }
  @media screen and ${device.tablet} {
    margin-left: 28px;
    width: 130px;
    height: 40px;
  }

  &:hover,
  &:focus {
    border: 1px solid #242a37;
    color: #242a37;
    background: rgba(0, 0, 0, 0);
    cursor: pointer;
  }
`;

export const ItemBtn = styled.div`
  margin: 20px 35px 24px 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 280px;
  @media screen and ${device.mobileS} and (max-width: 767px) {
  }
  @media screen and ${device.tablet} {
    width: 354px;
  }
`;
