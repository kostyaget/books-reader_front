import styled, { css } from "styled-components";
import library from "../../images/svg/library.svg";
import checkbox from "../../images/svg/checkbox.svg";
import checkboxActive from "../../images/svg/checkboxActive.svg";

const BreakPoint = {
  mobileMin: "min-width: 320px",
  tabletMin: "min-width: 768px",
  desktopMin: "min-width: 1024px",
  mobileMax: "max-width: 767px",
};

export const Colors = {
  white: "#ffffff",
  accent: "#FF6B08",
  dark: "#091E3F",
  lightGray: "#F5F7FA",
  grayBlue: "#242A37",
  borderLineColor: "#B1B5C2",
  borderListColor: "#e0e5eb",
  headingGray: "#898F9F",
  background: "#F6F7FB",
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
  @media screen and (${BreakPoint.tabletMin}) {
    max-width: 704px;
    border-top: 1px solid ${Colors.borderListColor};
    border-bottom: 1px solid ${Colors.borderListColor};

    overflow: auto;
    max-height: 280px;
    &::-webkit-scrollbar-track {
      background-color: ${Colors.borderListColor};
    }
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${Colors.borderLineColor};
    }
  }
  @media screen and (${BreakPoint.desktopMin}) {
    margin: 0;
    max-width: 1248px;
  }
`;

// table

export const TableTraining = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const PaddingRL = css`
  padding: 12px 20px;
`;

const TheadPosition = css`
  position: sticky;
  top: 0;
  background: ${Colors.background};
  z-index: 9;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid ${Colors.borderListColor};
  }
`;

export const THead = styled.thead`
  @media screen and (${BreakPoint.mobileMax}) {
    display: none;
  }
`;

export const TrHead = styled.tr`
  border-top: 1px solid ${Colors.borderListColor};
  border-bottom: 1px solid ${Colors.borderListColor};
`;

export const ThBookTitle = styled.th`
  ${TheadPosition}
  padding: 12px 20px 12px 0;
  text-align: left;
  ${HeadingText}
  @media screen and (${BreakPoint.tabletMin}) {
    width: 40%;
  }
`;

export const ThAuthor = styled.th`
  ${TheadPosition}
  text-align: left;
  ${PaddingRL}
  ${HeadingText}
`;

export const ThYear = styled.th`
  ${TheadPosition}
  width: 15%;
  text-align: right;
  ${PaddingRL}
  ${HeadingText}
`;

export const ThPages = styled.th`
  ${TheadPosition}
  width: 15%;
  text-align: right;
  ${PaddingRL}
  ${HeadingText}
  @media screen and (${BreakPoint.desktopMin}) {
    padding-right: 80px;
  }
`;

export const ThDelete = styled.th`
  ${TheadPosition}
`;

export const Tbody = styled.tbody``;

export const TrbodyTraining = styled.tr`
  border-top: 1px solid ${Colors.borderListColor};
  border-bottom: 1px solid ${Colors.borderListColor};
`;

export const Text = styled.p``;

export const TdBookTitle = styled.td`
  padding: 20px 0 14px;
  ${TextParams}
  color: ${Colors.grayBlue};
  @media screen and (${BreakPoint.tabletMin}) {
    padding: 12px 20px 12px 0;
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
  padding: 12px 20px;
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
  padding: 12px 20px;
  @media screen and (${BreakPoint.mobileMax}) {
    display: none;
  }
`;

export const TdPages = styled.td`
  ${TextParams}
  color: ${Colors.grayBlue};
  text-align: right;
  padding: 12px 20px;
  @media screen and (${BreakPoint.mobileMax}) {
    display: none;
  }
  @media screen and (${BreakPoint.desktopMin}) {
    padding-right: 80px;
  }
`;

export const TdDelete = styled.td`
  
  padding: 20px 0;
  vertical-align: top;
  @media screen and (${BreakPoint.tabletMin}) {
    padding: 12px 16px;
    vertical-align: middle;
  }
  @media screen and (${BreakPoint.desktopMin}) {
    padding: 12px 32px;
    /* float: right; */
  }
`;

export const FirstColumn = styled.div`
  display: flex;
  @media screen and (${BreakPoint.tabletMin}) {
    align-items: center;
  }
`;

export const IconContainer = styled.div`
  cursor: pointer;
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

export const CheckboxIco = styled.div`
  background-image: url(${checkbox});
  ${BackgroundIco}
  height: 15px;
`;

export const CheckboxActiveIco = styled.div`
  background-image: url(${checkboxActive});
  ${BackgroundIco}
  height: 15px;
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

export const ThMobile = styled.th`
  width: 80px;
  text-align: left;
  vertical-align: top;
  ${TextParams}
  color: ${Colors.headingGray};
`;

export const TdMobile = styled.td`
  ${TextParams}
  color: ${Colors.grayBlue};
`;
// mobile table end
