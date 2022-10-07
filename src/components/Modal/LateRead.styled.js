import styled from "styled-components";
import { device } from "../device/device";

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  min-width: 100vw;
  min-height: 100vh;
  background: rgba(43, 43, 43, 0.25);
`;

export const Rating = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  color: #242a37;

  @media ${device.mobileS} {
    width: 237px;
    // height: 88px;
    margin: 4px 2px 0 2px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and ${device.tablet} {
    width: 288px;
    height: 44px;
    margin: 14px 29px 0 29px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Btn = styled.button`
  width: 98px;
  height: 40px;
  background: #ffffff;
  color: #242a37;
  border: 1px solid #242a37;

  @media screen and ${device.mobileS} and (max-width: 767px) {
    width: 152px;
    height: 40px;
  }
  @media screen and ${device.tablet} {
    margin-left: 28px;
    width: 152px;
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
    width: 152px;
    height: 40px;
    margin-bottom: 20px;
  }
  @media screen and ${device.tablet} {
    width: 152px;
    height: 40px;
  }

  &:hover,
  &:focus {
    border: 1px solid #242a37;
    border: trye;
    color: #242a37;
    background: rgba(0, 0, 0, 0);
    cursor: pointer;
  }
`;

export const ItemBtn = styled.div`
  @media screen and ${device.mobileS} and (max-width: 767px) {
    margin: 20px 0 24px 0;
    margin-left: auto;
    margin-right: auto;
    width: 152px;
  }
  @media screen and ${device.tablet} {
    margin: 24px 0 28px 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Container = styled.div`
  z-index: 20;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: opacity 300ms, transform 300ms;
  background: #ffffff;
  @media screen and ${device.mobileS} and (max-width: 767px) {
    width: 240px;
    max-height: 318px;
  }
  @media screen and ${device.tablet} {
    width: 394px;
    max-height: 286px;
  }
`;

export const Svg = styled.img`
  width: 54px;
  height: 54px;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
`;
