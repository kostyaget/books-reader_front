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
    width: 227px;
    margin: 4px 2px 0 2px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and ${device.tablet} {
    width: 288px;
    margin: 0 29px 0 29px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ItemBtn = styled.div`
  margin: 20px 35px 20px 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnColor = styled.button`
  background: #ff6b08;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  border: none;
  margin-left: auto;
  margin-right: auto;

  @media screen and ${device.mobileS} and (max-width: 767px) {
    width: 152px;
    height: 40px;
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
  margin-top: 20px;
  margin-bottom: 14px;
  margin-left: auto;
  margin-right: auto;
`;
