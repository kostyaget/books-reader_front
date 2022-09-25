import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin-right: auto;
  margin-left: auto;
  border-bottom: 1px ffffff solid;
  height: 60px;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media screen and (min-width: 320px) {
    width: 320px;
  }
`;
export const Logo = styled.a`
  width: 28px;
  height: 27px;
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #242a37;
  display: inline-block;
  padding-top: 16px;
  padding-bottom: 17px;
`;

export const LogOutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogInContainer = styled.div`
  display: flex;
  padding-right: 20px;
  padding-left: 20px;
`;

export const NavList = styled.nav`
  margin: 0;
  list-style: none;
  display: flex;
  padding: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: auto;
`;
export const NavItem = styled.div`
  padding-top: 10px;
  padding-bottom: 7px;

  &:not(:first-child) {
    border-right: 1px #e0e5eb solid;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 6px;
  border-radius: 50%;
  margin-right: 8px;

  &:hover {
    background-color: #f5f7fa;
  }

  &.active {
    background-color: #f5f7fa;
  }
`;
export const Avatar = styled.div`
  margin-top: 14px;
  margin-left: 14px;
  // width: 40px;
  // height: 40px;
  // border-radius: 50%;
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
`;
