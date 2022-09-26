import styled from "styled-components";
import { device } from '../device/device';

export const Goal = styled.div`
  background: #b1b5c2;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobileS} {
    max-width: 280px;
    height: 60px;
  }
  @media ${device.tablet} {
    max-width: 275px;
    max-height: 60px;

    // margin-left: 28px;
    margin: 23px 0 23px 28px;
  }
  @media ${device.laptop} {
    max-width: 288px;
    max-height: 269px;
  }
`;

export const Number = styled.p`
  width: 26px;
  height: 38px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 38px;

  color: #091e3f;

  // margin-left: auto;
  // margin-right: auto;
`;

export const RoomArea = styled.div`
  width: 100px;
  height: 100px;
  display: flex;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f5f7fa;
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
`;

export const TextNumber = styled.p`
  width: 66px;
  height: 34px;

  margin-left: auto;
  margin-right: auto;
  margin-top: 14px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;

  color: #898f9f;
`;

export const TextTitle = styled.p`
  width: 220px;
  height: 24px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #ffffff;
`;

export const ResultItem = styled.ul`
  display: flex;

  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media ${device.mobileS} {
    max-width: 280px;
    max-height: 236px;
  }
  @media ${device.tablet} {
    max-width: 704px;
    max-height: 105px;
  }
  @media ${device.laptop} {
    max-width: 288px;
    max-height: 269px;
  }

  //   flex-wrap: wrap;
  //   margin-left: auto;
  //   margin-right: auto;
`;


export const ListNumbers = styled.li`
  margin-top: 44px;
  margin-bottom: 44px;
  width: 100px;
  margin-left: 30px;
  margin-right: -10px;
  list-style-type: none;

`;

export const Container = styled.div`  
  display: block;
  margin: 20px;

  @media ${device.mobileS} {
    max-width: 280px;
    max-height: 236px;
  }
  @media ${device.tablet} {
    max-width: 704px;
    max-height: 105px;
    // background-color: #212121;
  }
  @media ${device.laptop} {
    max-width: 288px;
    max-height: 269px;
  }
`;

//   Example
//   @media screen and (min-width: 768px) and (max-width: 1199px)