import styled from "styled-components";
import { Form, Field } from "formik";
import { device } from "../../device/device";
import { DatePickerField } from "./DatePickerField/DatePickerField";

export const FormResult = styled(Form)`
  position: relative;
  margin-bottom: 30px;
  align-items: center;

  @media ${device.tablet} and (max-width: 1023px) {
    display: flex;
    align-items: flex-end;
  } ;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 20px;

  margin-bottom: 30px;

  @media ${device.tablet} and (max-width: 1023px) {
    margin: 0;
  } ;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LabelText = styled.span`
  font-family: "Montserrat";
  font-size: 11px;
  line-height: 1.182;

  color: #898f9f;
`;

export const Input = styled(Field)`
  padding-left: 5px;
  height: 40px;
  max-width: 100px;
  font-family: "Montserrat";
  font-size: 14px;
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

export const DateInput = styled(DatePickerField)`
  padding-left: 5px;
  height: 40px;
  max-width: 100px;
  font-family: "Montserrat";
  font-size: 14px;
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

export const ErrorText = styled.p`
  position: absolute;
  top: 101%;
  max-width: 100px;
  font-family: "Montserrat";
  font-size: 10px;
  line-height: 1.18;
  color: red;
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  width: 240px;
  height: 40px;
  margin-right: auto;
  margin-left: auto;

  font-family: "Montserrat";
  font-size: 16px;
  line-height: 2.375;

  color: #ffffff;
  background: #ff6b08;
  border: none;

  &:hover {
    background: #ff9506;
  }

  @media ${device.tablet} and (max-width: 1023px) {
    margin-right: 0;
    margin-left: 30px;
  } ;
`;
