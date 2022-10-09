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
  User,
} from "./Header.styled";
import { useState, useEffect } from "react";
import ExitModal from "../Modal/ExitModal";
import { ReactComponent as Home } from "../../images/home.svg";
import { ReactComponent as Lib } from "../../images/book.svg";
import { useFetchUserDataQuery } from "../../redux/users/usersApi";
import { useDispatch } from "react-redux";

import { useLogoutUserMutation } from "../../redux/auth/authApi";
export default function LogInMenu() {
  const { data, error } = useFetchUserDataQuery();
  const name = data?.user.info.username;
  const [logoutUser] = useLogoutUserMutation();
  const [logoutModal, setLogoutModal] = useState(false);

  useEffect(() => {
    if (error) {
      localStorage.clear();
    }
  }, [error]);

  const closeLogoutModal = () => {
    setLogoutModal(false);
  };
  const onClick = () => {
    setLogoutModal(true);
  };
  const dispatch = useDispatch();
  const logoutFunc = () => {
    dispatch(logoutUser);
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
          </NavList>
          <Name>{name}</Name>
          <Avatar>
            <User>{name?.slice(0, 1)?.toUpperCase()}</User>
          </Avatar>
        </NavWrapper>
        <LogOutBtn type="button" onClick={onClick}>
          Logout
        </LogOutBtn>
      </LogInContainer>
      {logoutModal && (
        <ExitModal
          open={logoutModal}
          onClose={closeLogoutModal}
          logoutFunc={logoutFunc}
        ></ExitModal>
      )}
    </>
  );
}
