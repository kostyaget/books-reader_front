import styled from "styled-components";
import { device } from "../device/device";

export const Section = styled.section`
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background: #f6f7fb;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media ${device.tablet} and (max-width: 1023px) {
    padding: 30px 95px;
  } ;
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
