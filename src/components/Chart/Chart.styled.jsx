import styled from "styled-components";

export const Colors = {
  white: "#ffffff",
  accent: "#FF6B08",
  dark: "#091E3F",
  lightGray: "#F5F7FA",
  grayBlue: "#242A37",
  borderLineColor: "#B1B5C2",
};

export const Container = styled.div`
  box-sizing: border-box;

  margin: 0 auto;

  width: 100%;
  height: 290px;
  padding: 20px;

  background: ${Colors.white};
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);

  @media screen and (min-width: 768px) {
    // width: 704px;
    height: 340px;
    padding: 30px 47px;
    // margin-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    max-width: 928px;
    padding: 30px 36px;
  }
`;
