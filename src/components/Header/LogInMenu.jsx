import { useState, useEffect } from "react";
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
  Border,
  NavWrapper,
  User,
} from "./Header.styled";

export default function LogInMenu() {
  const { data, error } = useFetchUserDataQuery();
  const name = data?.user.info.username;
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
    setTimeout(() => {
      const menu = document.getElementById("Menu");
      const btnclk = () => {
        menu.style.display = "block";
      };
      btnclk();
    }, 1);
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
              <User id="Icon" type="button" onClick={onClick}>
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
