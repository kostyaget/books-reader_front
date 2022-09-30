import styled from "styled-components";

export const Section = styled.div`
  background: rgba(9, 30, 63, 0.8);
  padding: 108px 77px 74px 72px;
`;
export const SectionRegistration = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 609px;
  background: #ffffff;
`;
export const GoogleSection = styled.div`
  padding-top: 41px;
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
  //   line-height: 38px;

  text-align: center;
  color: #707375;
  background: #f5f7fa;
  box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15); ;
`;
export const GoogleLogo = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 16px;
  margin-left: 14px;
`;

export const Error = styled.p`
  color: red;
`;
export const LabelField = styled.label`
  padding-top: 20px;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 17px;
  align-self: start;
  padding-left: 35px;

  color: #898f9f;
`;

export const InputField = styled.input`
  width: 320px;
  height: 42px;
  border: none;

  background: #f5f7fa;
  box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
`;

export const RegisterBtn = styled.button`
  width: 320px;
  height: 60px;
  margin-top: 32px;
  margin-bottom: 20px;

  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;
  background: #ff6b08;
`;
export const LoginLink = styled.div``;
export const LogTitle = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;

  text-align: center;

  color: #898f9f;
`;
export const Login = styled.a`
  font-size: 13px;
  line-height: 16px;
  margin-left: 5px;
  color: #ff6b08;
`;
export const Star = styled.span`
  padding-left: 3px;
  color: #ff6b08;
`;
