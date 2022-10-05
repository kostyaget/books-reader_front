import styled from "styled-components";

export const ІnfModal = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 160px;
  margin-left: auto;
  margin-right: auto;
  width: 240px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 43px;
  padding-bottom: 94px;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media screen and (min-width: 768px) {
    width: 568px;
    padding-top: 40px;
    padding-bottom: 58px;
    position: relative;
    top: 0px;
    right: 0px;
  }
`;
export const InfoPreTitle = styled.b`
  margin-bottom: 8px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  display: block;
`;

export const InfoTitle = styled.h3`
  display: inline-block;
  margin-bottom: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #242a37;
`;

export const InfoText = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #898f9f;
`;
export const InfoTextWrapp = styled.div`
  padding-left: 30px;
`;
export const InfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const InfoItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const InfoBtn = styled.button`
  display: block;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 11px;
  padding-bottom: 12px;
  padding-left: 54px;
  padding-right: 54px;
  cursor: pointer;
  border: none;
  background: #ff6b08;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
