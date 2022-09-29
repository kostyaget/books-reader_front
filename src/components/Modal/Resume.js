import styled from "styled-components";
import { device } from "../device/device";

export const Rating = styled.p`
  width: 193px;
  height: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #242a37;

  @media ${device.mobileS} {
    margin: 0 0 20px 0;
  }
`;

export const Forms = styled.textarea`
  width: 240px;
  height: 170px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #242a37;
  padding: 10px;

  border: 1px solid #A6ABB9;
  resize: none;

  @media ${device.mobileS} and (max-width: 767px) {
    margin: -12px 0 20px 0;
  }

  @media ${device.tablet} {
    margin: -8px 0 28px 0;
    width: 568px;
    height: 170px;
  }
`;

export const Btn = styled.button`
  width: 98px;
  height: 40px;
  background: #ffffff;
  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
  color: #242a37;
  border: 1px solid #242A37;


  &:hover, 
  &:focus,
  &:active {
	border: 1px solid #242A37;
	background: #ff6b08;
    cursor: pointer;
    color: #fff 
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
	border: 1px solid #242A37;
    border: trye;
	color: #242a37;
	background: rgba(0,0,0,0);
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
  @media screen and ${device.mobileS} and (max-width: 767px) {
    max-width: 280px;
    max-height: 395px;
  }
  @media screen and ${device.tablet} {
    max-width: 608px;
    max-height: 399px;
  }
`;
