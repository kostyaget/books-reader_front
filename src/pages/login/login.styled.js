import styled from "styled-components";

export const Section = styled.div`
  background: rgba(9, 30, 63, 0.8);
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: flex;
    justify-content: center;
    padding: 32px 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 70px 144px;
    display: flex;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    padding: 176px 79px 184px 70px;
  }
`;

export const SectionLogin = styled.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 320px;
    height: 408px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 430px;
    background: #ffffff;
  }
`;
export const GoogleSection = styled.div`
  display: flex;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-top: 12px;
  }
`;

export const GoogleButton = styled.button`
  align-items: center;
  display: flex;
  border: none;
  width: 150px;
  height: 40px;

  font-family: "Roboto";
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #707375;
  background: #f5f7fa;
  box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);
  cursor: pointer;

  transition: 1s;
  text-align: center;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
export const GoogleLogo = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 16px;
  margin-left: 14px;
`;
export const ErrorMessage = styled.div`
  height: 20px;

  font-size: 20px;
  font-weight: normal;
  cursor: pointer;
  text-shadow: 0 0 15px #999;
  color: transparent;
  transition: all 0.5s;

  &:hover,
  &:focus {
    text-shadow: 0 0 0 #333;
  }
`;
export const Error = styled.p`
  font-size: 12px;
  color: red;
`;
export const LabelField = styled.label`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding-left: 18px;
  }

  padding-bottom: 8px;
  font-size: 14px;
  line-height: 17px;
  align-self: start;
  padding-left: 35px;

  color: #898f9f;

  transition: 1s;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export const InputField = styled.input`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 280px;
  }
  width: 320px;
  height: 42px;
  border: none;

  background: #f5f7fa;
  box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
`;
export const LogiBtn = styled.button`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 280px;
    &:hover,
    &:focus {
      background-color: #d15807;
      transition: background-color 0.25s ease-in-out;
    }
  }
  width: 320px;
  height: 60px;
  margin-top: 12px;
  margin-bottom: 20px;

  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;
  background: #ff6b08;
  cursor: pointer;
  border: none;

  &:hover,
  &:focus {
    background-color: #d15807;
    transition: background-color 0.25s ease-in-out;
  }
`;
export const Register = styled.p`
  font-family: "Montserrat";
  font-size: 13px;
  line-height: 16px;
  color: #ff6b08;
  text-decoration: none;

  transition: transform 0.8s ease-in-out;
  &:hover,
  &:focus {
    transform: rotate(360deg);
  }
`;
export const Star = styled.span`
  padding-left: 3px;
  color: #ff6b08;
`;
export const GLink = styled.a`
  text-decoration: none;
`;
