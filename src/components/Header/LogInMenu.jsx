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
import { useLogoutUserMutation } from "../../redux/auth/authApi";

export default function LogInMenu() {
  const [logoutUser] = useLogoutUserMutation();

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
        <LogOutBtn type="button" onClick={() => logoutUser()}>
          Logout
        </LogOutBtn>
      </LogInContainer>
    </>
  );
}
