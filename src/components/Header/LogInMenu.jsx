import {
  Logo,
  LogInContainer,
  NavList,
  Avatar,
  StyledNavLink,
  LogOutBtn,
  Border,
  NavWrapper,
  Name
} from "./Header.styled";

import { ReactComponent as Home } from "./Logo/home.svg";
import { ReactComponent as Lib } from "./Logo/lib.svg";
import { ReactComponent as User } from "./Logo/user.svg";

export default function LogInMenu() {
  return (
    <>
      <LogInContainer>
        <Logo>BR</Logo>
        <NavWrapper>
        <NavList>
          <StyledNavLink to="/library">
            <Lib />
          </StyledNavLink>
          <Border>
          <StyledNavLink to="/">
            <Home  />
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
