import { useState, useEffect } from "react";

// import { useLogoutUserMutation } from "../../redux/auth/authApi";
import { useFetchUserDataQuery } from "../../redux/users/usersApi";

import HederMenu from "../Modal/HederMenu";
import { ReactComponent as Home } from "../../images/home.svg";
import { ReactComponent as Lib } from "../../images/book.svg";
import {
  Logo,
  LogInContainer,
  NavList,
  Avatar,
  StyledNavLink,
  // LogOutBtn,
  Border,
  NavWrapper,
  // Name,
  User,
} from "./Header.styled";

export default function LogInMenu() {
  const { data, error } = useFetchUserDataQuery();
  const name = data?.user.info.username;
  // const [logoutUser] = useLogoutUserMutation();
  // const [logoutModal, setLogoutModal] = useState(false);
  const [Menu, setMenu] = useState(false);
  useEffect(() => {
    if (error) {
      localStorage.clear();
    }
  }, [error]);

  const closeMenu = () => {
    setMenu(false);
  };

  const onClick = () => {
    setMenu(true);
  };

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
              <StyledNavLink to="/library">
                <Home />
              </StyledNavLink>
            </Border>

            <Avatar>
              <User type="button" onClick={onClick}>
                {name?.slice(0, 1)?.toUpperCase()}
              </User>
            </Avatar>
          </NavList>
        </NavWrapper>
      </LogInContainer>

      {Menu && <HederMenu onClose={closeMenu} open={Menu} />}
    </>
  );
}
