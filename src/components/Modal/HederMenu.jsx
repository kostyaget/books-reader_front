import { useState } from "react";
import { useDispatch } from "react-redux";
import ExitModal from "../Modal/ExitModal";
import { Name } from "../Header/Header.styled";
import {
  Container,
  ListMenu,
  Hr,
  Avatar,
  Svg,
  User,
  // Background,
  Button,
} from "./HederMenu.style";
import "./Resume.css";
import { useLogoutUserMutation } from "../../redux/auth/authApi";
import { useFetchUserDataQuery } from "../../redux/users/usersApi";
import { ReactComponent as Exit } from "../../images/svg/menu/logout-svgrepo-com.svg";

const HederMenu = ({ open, onClose }) => {
  const { data } = useFetchUserDataQuery();
  const name = data?.user.info.username;
  const [logoutUser] = useLogoutUserMutation();
  const [logoutModal, setLogoutModal] = useState(false);

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
      {open && (
          <Container onClick={(e) => e.stopPropagation()}>
            <Avatar>
              <User>{name?.slice(0, 1)?.toUpperCase()}</User>
              <Name>{name}</Name>
              <Button onClick={onClose}>x</Button>
            </Avatar>

            <Hr />
            <ListMenu type="button" onClick={onClick}>
              <Svg>
                <Exit />
              </Svg>
              Logout
            </ListMenu>
          </Container>
      )}
      {logoutModal && (
        <ExitModal
          open={logoutModal}
          onClose={closeLogoutModal}
          logoutFunc={logoutFunc}
        ></ExitModal>
      )}
    </>
  );
};

export default HederMenu;
