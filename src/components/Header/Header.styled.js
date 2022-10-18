import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  margin-right: auto;
  margin-left: auto;
  border-bottom: 1px ffffff solid;
  height: 60px;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  background-color: #ffffff;
  // @media screen and (min-width: 1280px) {
  //   width: 1280px;
  // }
`;
export const Logo = styled.a`
  width: 28px;
  height: 27px;
  font-family: "Abril Fatface";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #242a37;
  display: inline-block;
  padding-top: 19px;
  padding-bottom: 14px;
`;

export const LogOutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    justify-content: start;
    padding-right: 32px;
    padding-left: 32px;
  }
  @media screen and (min-width: 1280px) {
    padding-right: 16px;
    padding-left: 16px;
  }
`;
export const LogInContainer = styled.div`
  display: flex;
  padding-right: 20px;
  padding-left: 20px;
`;

export const NavList = styled.nav`
  display: flex;
  padding-top: 14px;
  padding-bottom: 5px;
  margin-left: auto;
`;
export const Border = styled.div`
border-right: 1px #E0E5EB solid;
  }
`;

export const StyledNavLink = styled(NavLink)`
  margin-right: 8px;
  border-radius: 50%;
  display: block;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-top: 11px;

  &:hover {
    background-color: #f5f7fa;
  }

  &.active {
    background-color: #f5f7fa;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;
export const Avatar = styled.div`
  padding-top: 14px;
  margin-left: 14px;

  @media screen and (min-width: 768px) {
    margin-left: 0px;
  }
`;
export const User = styled.span`
  display: block;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 15px;
  padding-right: 15px;
  background: #f5f7fa;
  border-radius: 50%;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.214;

  color: #242a37;
`;

export const Name = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    padding-top: 22px;
    margin-right: 180px;
    margin-left: 21px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 400px;
  }
`;

export const LogOutBtn = styled.button`
  margin-top: 20px;
  margin-left: 14px;

  padding: 0;
  height: 20px;
  border: none;
  border-bottom: 1px #242a37 solid;
  outline: none;
  background: transparent;
  color: #242a37;
  cursor: pointer;

  &:hover,
  focus {
    color: #ff6b08;
  }
`;
