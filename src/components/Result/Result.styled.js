import styled from "styled-components";
import { device } from "../device/device";

export const Section = styled.section`
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media ${device.tablet} and (max-width: 1023px) {
    padding: 30px 55px;
  }
  @media ${device.laptop} {
    padding: 19px 10px;
    margin-top: 0;
    width: 268px;
    max-height: 340px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-family: "Montserrat";
  font-size: 12px;
  line-height: 1.25;

  text-align: center;
  text-transform: uppercase;

  color: #242a37;
  @media ${device.tablet} and (max-width: 1023px) {
    font-size: 14px;
    line-height: 1.214;
  } ;
`;
