import styled from "styled-components";
import { Link } from "react-router-dom";

export const BookForm = styled.form`
  background-color: #f6f7fb;
  padding-top: 24px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 110px;
`;
export const BookInput = styled.input`
  display: block;

  width: 280px;
  height: 42px;
  border: 1px solid #a6abb9;

  margin-bottom: 20px;
`;
export const BookLabel = styled.label`
  display: block;
  margin-bottom: 8px;

  color: #898f9f;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;
export const BookBnt = styled.button`
  display: block;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 11px;
  padding-bottom: 12px;
  padding-left: 72px;
  padding-right: 72px;

  border: 1px solid #242a37;
  background: #f6f7fb;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;
export const BackArrow = styled(Link)`
  display: inline-block;
  margin-bottom: 32px;
`;

export const ValidMessege = styled.span`
  color: red;
`;
