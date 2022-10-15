import styled from "styled-components";
import { Link } from "react-router-dom";

export const LibrarySection = styled.section`
  position: reletive;
  max-width: 1280px;
  margin: auto;
  padding-bottom: 60px;

  background-color: #f6f7fb;
`;

export const ToFormBtn = styled.button`
  display: block;
  position: fixed;
  bottom: 12px;
  left: 45%;
  margin-left: auto;
  margin-right: auto;
  padding: 18px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 50%;
  border: none;

  background-color: #ff6b08;
`;

export const LibraryBnt = styled(Link)`
  display: block;
  width: 171px;
  margin: 20px auto 110px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  text-decoration: none;
  border: none;

  background-color: #ff6b08;
  color: #ffffff;

  &:hover {
    background: #ff9506;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;
