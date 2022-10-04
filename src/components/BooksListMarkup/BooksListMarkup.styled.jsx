import styled, { css } from "styled-components";
import library from "../../images/svg/library.svg";
import libraryActive from "../../images/svg/libraryActive.svg";

const BreakPoint = {
  mobileMin: "min-width: 320px",
  tabletMin: "min-width: 768px",
  desktopMin: "min-width: 1280px",
  mobileMax: "max-width: 767px",
};

export const Colors = {
  white: "#ffffff",
  accent: "#FF6B08",
  dark: "#091E3F",
  lightGray: "#F5F7FA",
  grayBlue: "#242A37",
  borderLineColor: "#B1B5C2",
  headingGray: "#898F9F",
};

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

const HeadingText = css`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;

  color: ${Colors.headingGray};
`;

export const Wrapper = styled.div`
  box-sizing: border-box;

  margin: 0 auto;
  max-width: 280px;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (${BreakPoint.tabletMin}) {
    max-width: 704px;
    margin-bottom: 32px;
  }
  @media screen and (${BreakPoint.desktopMin}) {
    max-width: 1248px;
    margin-bottom: 24px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 4px;

  font-family: "Montserrat";
  font-weight: 600;
  font-size: 19px;
  line-height: 1.21;

  color: ${Colors.grayBlue};
  @media screen and (${BreakPoint.tabletMin}) {
    margin-bottom: 16px;
  }
`;

// table
export const Table = styled.table`
  width: 100%;
  border-spacing: 0 16px;
  @media screen and (${BreakPoint.tabletMin}) {
    border-spacing: 0 8px;
  }
`;

export const THead = styled.thead`
  @media screen and (${BreakPoint.mobileMax}) {
    display: none;
  }
`;

export const TrHead = styled.tr``;

const PaddingRL = css`
  padding-right: 20px;
  padding-left: 20px;
`;

export const ThBookTitle = styled.th`
  padding-right: 20px;
  text-align: left;
  ${HeadingText}
  @media screen and (${BreakPoint.tabletMin}) {
    width: 40%;
  }
`;

export const ThAuthor = styled.th`
  text-align: left;
  ${PaddingRL}
  ${HeadingText}
`;

export const ThYear = styled.th`
  width: 15%;
  text-align: right;
  ${PaddingRL}
  ${HeadingText}
`;

export const ThPages = styled.th`
  width: 15%;
  text-align: right;
  ${PaddingRL}
  ${HeadingText}
  @media screen and (${BreakPoint.desktopMin}) {
    padding-right: 80px;
  }
`;

export const ThRating = styled.th`
  text-align: left;
  ${PaddingRL}
  ${HeadingText}
  @media screen and (${BreakPoint.desktopMin}) {
    padding-right: 80px;
  }
`;

export const Tbody = styled.tbody``;

export const Trbody = styled.tr`
  background-color: ${Colors.white};
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
`;

export const Text = styled.p``;

export const TdBookTitle = styled.td`
  padding: 20px 20px 14px;
  ${TextParams}
  color: ${Colors.grayBlue};
  @media screen and (${BreakPoint.tabletMin}) {
    padding: 20px;
  }
`;
export const TdEmpty = styled.td.attrs({
  colSpan: 4,
})`
  padding: 20px;
  ${TextParams}
  color: ${Colors.grayBlue};
`;

export const TdAuthor = styled.td`
  padding: 20px;
  ${TextParams}
  color: ${Colors.grayBlue};
  @media screen and (${BreakPoint.mobileMax}) {
    display: none;
  }
`;

export const TdYear = styled.td`
  ${TextParams}
  color: ${Colors.grayBlue};
  text-align: right;
  padding: 20px;
  @media screen and (${BreakPoint.mobileMax}) {
    display: none;
  }
`;

export const TdPages = styled.td`
  ${TextParams}
  color: ${Colors.grayBlue};
  text-align: right;
  padding: 20px;
  @media screen and (${BreakPoint.mobileMax}) {
    display: none;
  }
  @media screen and (${BreakPoint.desktopMin}) {
    padding-right: 80px;
  }
`;

export const TdRating = styled.td`
  padding: 11px 20px;
  @media screen and (${BreakPoint.mobileMax}) {
    display: none;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (${BreakPoint.mobileMax}) {
    display: none;
  }
`;

export const FirstColumn = styled.div`
  display: flex;
  @media screen and (${BreakPoint.tabletMin}) {
    align-items: center;
  }
`;

export const IconContainer = styled.div`
  width: 22px;
  margin-right: 12px;
  @media screen and (${BreakPoint.tabletMin}) {
    margin-right: 18px;
  }
`;

const BackgroundIco = css`
  background-repeat: no-repeat;
  background-size: contain;
  width: 22px;
  height: 17px;
`;

export const LibraryIco = styled.div`
  background-image: url(${library});
  ${BackgroundIco}
`;

export const LibraryActiveIco = styled.div`
  background-image: url(${libraryActive});
  ${BackgroundIco};
`;

// mobile table start
export const MobileTableWrapper = styled.div`
  @media screen and (${BreakPoint.tabletMin}) {
    display: none;
  }
`;

export const TableMobile = styled.table`
  width: 100%;
  border-spacing: 0 14px;
`;

export const TbodyMobile = styled.tbody``;
export const TrMobile = styled.tr``;

export const ThMobile = styled.td`
  width: 80px;
  text-align: left;
  vertical-align: top;
  ${TextParams}
  color: ${Colors.headingGray};
`;
export const TdMobileButton = styled.td.attrs({
  colSpan: 2,
})``;

export const TdMobile = styled.td`
  ${TextParams}
  color: ${Colors.grayBlue};
`;
// mobile table end
