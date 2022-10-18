import styled from "styled-components";

const BreakPoint = {
  mobileMin: "min-width: 320px",
  tabletMin: "min-width: 768px",
  desktopMin: "min-width: 1280px",
  mobileMax: "max-width: 767px",
};

export const Button = styled.button`
  padding: 11px 35px;
  margin-left: 20px;

  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;

  text-align: center;
  background-color: #6d7a8d;
  color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: 0;
  cursor: pointer;

  transition: background-color 150ms linear;

  &:hover,
  &:focus {
    background-color: #ff6b08;
  }

  @media screen and (${BreakPoint.tabletMin}) {
    padding: 11px 10px;
    margin-left: 32px;
  }
  @media screen and (${BreakPoint.desktopMin}) {
    padding: 11px 35px;
    margin-left: 60px;
  }
`;
