import styled, { css } from "styled-components";

const BreakPoint = {
  mobileMin: "min-width: 320px",
  tabletMin: "min-width: 768px",
  desktopMin: "min-width: 1280px",
};

export const Wrapper = styled.div`
  box-sizing: border-box;

  margin: 0 auto;
  width: 280px;

  @media screen and (${BreakPoint.tabletMin}) {
    width: 704px;
  }

  @media screen and (${BreakPoint.desktopMin}) {
    width: 1248px;
  }
`;

export const SectionTitle = styled.div`
  padding-bottom: 20px;

  font-family: "Montserrat";
  font-weight: 600;
  font-size: 19px;
  line-height: 1.21;

  color: #242a37;

  @media screen and (${BreakPoint.tabletMin}) {
    padding-bottom: 24px;
  }
`;

export const WrapperHeading = styled.div`
  display: none;

  @media screen and (${BreakPoint.tabletMin}) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
  }
`;

export const Heading = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;

  color: #898f9f;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  margin-bottom: 16px;

  @media screen and (${BreakPoint.tabletMin}) {
    margin-bottom: 8px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContainerItem = styled.div`
  display: flex;
  /* justify-content: space-between; */
  padding: 20px 20px 28px;

  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media screen and (${BreakPoint.tabletMin}) {
    padding: 14px 20px;
  }

  @media screen and (${BreakPoint.desktopMin}) {
    padding: 22px 20px;
  }
`;

export const IconContainer = styled.div`
  padding-right: 12px;
`;

export const FirstColumn = styled.div`
  @media screen and (${BreakPoint.tabletMin}) {
    display: flex;
    align-items: center;
  }
`;

const TextParams = css`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;

  @media screen and (${BreakPoint.tabletMin}) {
    font-size: 14px;
    line-height: 1.21;
  }
`;

export const BookTitleTablet = styled.p`
  display: none;
  ${TextParams}
  color: #242a37;
  @media screen and (${BreakPoint.tabletMin}) {
    display: block;
  }
`;

export const BookTitleMobile = styled.p`
  ${TextParams}
  color: #242a37;
  padding-bottom: 12px;

  @media screen and (${BreakPoint.tabletMin}) {
    display: none;
  }
`;

export const WrapperTextMobile = styled.div`
  display: flex;
  margin-bottom: 14px;
  ////////////////////

  @media screen and (${BreakPoint.tabletMin}) {
  }
`;

export const TextWrapper = styled.div`
  width: 126px;
  /* margin-right: 25px; */
  ///////////////////////////////////////////////
`;

export const WrapperText = styled.div`
  /* width: 116px; */
  //////////////////////////////
`;

export const HeadingMobile = styled.div`
  width: 80px;
  ${TextParams}
  color: #898f9f;

  @media screen and (${BreakPoint.tabletMin}) {
    display: none;
  }
`;

export const Text = styled.p`
  ${TextParams}
  color: #242a37;

  @media screen and (${BreakPoint.tabletMin}) {
  }
`;
