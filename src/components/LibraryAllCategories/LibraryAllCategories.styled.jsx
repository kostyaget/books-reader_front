import styled from "styled-components";

const BreakPoint = {
  mobileMin: "min-width: 320px",
  tabletMin: "min-width: 768px",
  desktopMin: "min-width: 1280px",
  mobileMax: "max-width: 767px",
};

export const Section = styled.section`
  padding: 20px 0 80px;

  @media screen and (${BreakPoint.tabletMin}) {
    padding: 40px 0 60px;
  }
  @media screen and (${BreakPoint.desktopMin}) {
    padding: 80px 0;
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 320px;
  padding: 0 20px;
  @media screen and (${BreakPoint.tabletMin}) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (${BreakPoint.desktopMin}) {
    width: 1280px;
    padding: 0 16px;
  }
`;

export const NoBooks = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #898f9f;
`;
// export const CategoriesWrapper = styled.div`
//   margin-bottom: 12px;
//   &:last-child {
//     margin-bottom: 0;
//   }

//   @media screen and (${BreakPoint.tabletMin}) {
//     margin-bottom: 32px;
//   }
//   @media screen and (${BreakPoint.desktopMin}) {
//     margin-bottom: 24px;
//   }
// `;
