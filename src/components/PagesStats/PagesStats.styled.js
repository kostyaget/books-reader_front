import styled, { css } from "styled-components";
import { device } from "../device/device";

export const Table = styled.table`
  margin: 0 auto;

  @media ${device.tablet} and (max-width: 1023px) {
    margin: 0;
  } ;
`;

export const Title = styled.caption`
  position: relative;
  margin-bottom: 5px;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 12px;
  line-height: 1.25;
  text-transform: uppercase;
  color: #242a37;

  &:before {
    position: absolute;
    top: 50%;
    right: 75%;
    content: " ";
    display: inline-block;
    width: 74px;
    height: 1px;
    background-color: #898f9f;
  }
  &:after {
    position: absolute;
    top: 50%;
    left: 75%;
    content: " ";
    display: inline-block;
    width: 74px;
    height: 1px;
    background-color: #898f9f;
  }

  @media ${device.tablet} and (max-width: 1023px) {
    padding-left: 4px;
    text-align: left;

    &:before {
      display: none;
    }
    &:after {
      left: 34%;
      width: 160px;
    }
  }
`;

export const TableData = styled.td`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;

  color: #898f9f;
  ${(props) =>
    props.date &&
    css`
      padding-right: 32px;
      color: #242a37;
    `};
  ${(props) =>
    props.pages &&
    css`
      padding-left: 26px;
      text-align: right;
    `};
`;

export const NumberOfPages = styled.span`
  color: #242a37;
`;
