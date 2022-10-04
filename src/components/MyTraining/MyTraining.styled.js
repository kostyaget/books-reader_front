import styled from "styled-components";
import { device } from "../device/device";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    width: 928px;
    max-height: 329px;
  }
`;

export const MyTrainingWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    width: 100%;
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

  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #b1b5c2;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  margin-bottom: 24px;
`;

export const AddForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 928px;
`;

export const DatesWrap = styled.div`
  ${device.tablet} {
    display: flex;
    justify-content: start;
    width: 704px;
    margin-bottom: 24px;
  }

  display: flex;
  justify-content: center;
  width: 928px;
  margin-bottom: 24px;
`;

export const InputDateWrap = styled.div`
  position: relative;
  width: 250px;
  &:not(:last-child) {
    margin-right: 44px;
  }

  ${device.tablet} {
    width: 250px;
    margin-bottom: 0;
    & + & {
      margin-left: 40px;
    }
  }
  ${device.desktop} {
    & + & {
      margin-left: 44px;
    }
  }
`;

export const LabelText = styled.span`
  position: absolute;
  left: 45px;
  top: 4px;
  z-index: 3;

  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  line-height: 2.71;

  color: #a6abb9;
`;

export const Icon = styled.svg`
  position: absolute;
  left: 230px;
  top: 18px;
  z-index: 3;

  fill: #242a37;
`;

export const CalendarIcon = styled.svg`
  position: absolute;
  top: 13px;
  left: 12px;
  z-index: 3;
`;

export const SelectsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 23px;
`;

export const Button = styled.button`
  width: 181px;
  height: 42px;
  padding: 11px;
  font-weight: 500;
  ${device.tablet} {
    font-size: 14px;
  }
`;

export const DateInputPiker = styled(DatePicker)`
  font-size: 14px;
  font-family: "Montserrat";

  width: 120px;
  height: 42px;
  padding-left: 130px;

  color: #242a37;
  ${device.tablet} {
    width: 250px;
  }

  line-height: 2.71;

  color: #242a37;
  background-color: #f6f7fb;
  border: 1px solid #a6abb9;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #091e3f;
  }
`;

export const Select = styled.select`
  font-size: 14px;
  font-family: "Montserrat";

  width: 715px;
  height: 42px;
  color: #898f9f;

  margin-right: 32px;
  border: 1px solid #a6abb9;
  outline: none;
  padding-left: 12px;
  padding-right: 11px;

  ${device.tablet} {
    width: 483px;
    margin-bottom: 0;
    margin-right: 50px;
  }
  ${device.laptop} {
    width: 715px;
    margin-right: 32px;
  }
`;
