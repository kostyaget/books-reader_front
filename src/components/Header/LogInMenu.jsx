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
import { useState } from "react";
import ExitModal from "../Modal/ExitModal";
import { ReactComponent as Home } from "../../images/home.svg";
import { ReactComponent as Lib } from "../../images/book.svg";
import { useFetchUserDataQuery } from "../../redux/users/usersApi";

export default function LogInMenu() {
  const [modalState, setModalState] = useState(false);
  const { data } = useFetchUserDataQuery();
  const name = data?.user?.info.username;

  const toggleModal = () => {
    setModalState((state) => !state);
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
            <User>{name?.slice(0, 1)}</User>
          </Avatar>
        </NavWrapper>
        <LogOutBtn type="button" onClick={() => toggleModal()}>
          Logout
        </LogOutBtn>
      </LogInContainer>
      {modalState && <ExitModal onClose={toggleModal}></ExitModal>}
    </>
  );
}
