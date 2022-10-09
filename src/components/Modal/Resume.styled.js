import styled from "styled-components";
import { device } from "../device/device";

export const Rating = styled.label`
  display: block;
  width: 100%;
  height: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #242a37;

  @media ${device.mobileS} {
    margin: 0px 0 12px 0;
  }
`;

export const RatingArea = styled.div`
  overflow: hidden;
  width: 265px;
  /* margin: 0 auto; */

  &:not(:checked) > input {
    display: none;
  }
  &:not(:checked) > label {
    float: right;
    width: 42px;
    padding: 0;
    cursor: pointer;
    font-size: 32px;
    line-height: 32px;
    color: lightgrey;
    text-shadow: 1px 1px #bbb;
  }
  &:not(:checked) > label:before {
    content: "★";
  }
  & > input:checked ~ label {
    color: gold;
    text-shadow: 1px 1px #c60;
  }
  &:not(:checked) > label:hover,
  &:not(:checked) > label:hover ~ label {
    color: gold;
  }
  & > input:checked + label:hover,
  & > input:checked + label:hover ~ label,
  & > input:checked ~ label:hover,
  & > input:checked ~ label:hover ~ label,
  & > label:hover ~ input:checked ~ label {
    color: gold;
    text-shadow: 1px 1px goldenrod;
  }
  & > label:active {
    position: relative;
  }
`;

export const Summary = styled.textarea`
  width: 260px;
  height: 170px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;
  padding: 10px;
  border: 1px solid #a6abb9;
  resize: none;

  @media ${device.mobileS} and (max-width: 767px) {
    margin: -4px 0 20px 0;
  }

  @media ${device.tablet} {
    margin: 0 0 28px 0;
    width: 545px;
    height: 170px;
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
  margin: 0 35px 20px 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  
`;

export const Container = styled.div`
width:568px;
display:flex;
// background: #ffffff;
// position: absolute;
// left: 0;
// right: 0;
// top: 50%;
z-index: 2000;
// margin-left: auto;
// margin-right: auto;
// // padding-top: 24px;
// // padding-bottom: 24px;
// padding:20px;

  @media screen and ${device.mobileS} and (max-width: 767px) {
    max-width: 280px;
    max-height: 395px;
  }
  @media screen and ${device.tablet} {
    max-width: 568px;
    max-height: 399px;
  }
`;

export const RatingStarss = styled.div`
@media ${device.mobileS} {
  margin: 0 0 15px 0;
  height: 17px;
}
`
