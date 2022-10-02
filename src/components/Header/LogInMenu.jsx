import {
  Logo,
  LogInContainer,
  NavList,
  Avatar,
  StyledNavLink,
  LogOutBtn,
  Border,
  NavWrapper,
  Name,
} from "./Header.styled";

import { ReactComponent as Home } from "../../images/home.svg";
import { ReactComponent as Lib } from "../../images/book.svg";
import { ReactComponent as User } from "../../images/user.svg";

export default function LogInMenu() {
  return (
    <>
      <LogInContainer>
        <Logo>BR</Logo>
        <NavWrapper>
          
          <NavList>
            <StyledNavLink to="/training">
              <Lib />
            </StyledNavLink>
            <Border>
              <StyledNavLink to="/">
                <Home />
              </StyledNavLink>
            </Border>
          </NavList>
          <Name>Martha Stewart</Name>
          <Avatar>
            <User width="40px" height="40px" />
          </Avatar>
        </NavWrapper>
        <LogOutBtn type="submit">Logout</LogOutBtn>
      </LogInContainer>
    </>
  );
}
