import styled from "styled-components";
import { device } from "../../components/device/device";

export const Button = styled.button`
  display: block;
  cursor: pointer;
  width: 171px;
  height: 40px;
  margin: 0 auto;

  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 1.214;

  color: #ffffff;
  background: #ff6b08;
  border: none;

  &:hover {
    background: #ff9506;
  }

  @media ${device.tablet} and (max-width: 1023px) {
    width: 200px;
    margin: 40px auto;
    font-size: 16px;
    line-height: 1.25;
  } ;
`;
