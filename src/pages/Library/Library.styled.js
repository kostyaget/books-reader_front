import styled from "styled-components";
import { Link } from "react-router-dom";

export const LibrarySection = styled.section`
  position: reletive;
  background-color: #f6f7fb;
  max-width: 1280px;
  margin: auto;
  padding-bottom: 60px;
`;
export const ToFormBtn = styled.button`
  bottom: 12px;
  left: 45%;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  border-radius: 50%;
  border: none;
  display: block;
  padding: 18px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #ff6b08;
`;

export const LibraryBnt = styled(Link)`
  display: block;
  border: none;
  background-color: #ff6b08;
  color: #ffffff;

  text-decoration: none;
  margin: 20px auto 110px;
  text-align: center;
  width: 171px;
  padding-top: 10px;
  padding-bottom: 10px;
  &:hover {
    background: #ff9506;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;
