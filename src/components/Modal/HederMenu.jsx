import { useState } from "react";
import { useDispatch } from "react-redux";
import ExitModal from "./ExitModal";
import { Name } from "../Header/Header.styled";
import {
  Container,
  ListMenu,
  Hr,
  Avatar,
  Svg,
  User,
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

  const backFunc = () => {
    onClick();
    setTimeout(() => {
      const menu = document.getElementById("Menu");
      const btnclk= () => {
        menu.style.display = 'none';
      }
      btnclk();
    },1)
}

  return (
    <div>
      <div id="Menu" className={open && "modalMenu active"} onClick={onClose}>
        {open && (
          <Container onClick={(e) => e.stopPropagation()}>
            <Avatar>
              <User>{name?.slice(0, 1)?.toUpperCase()}</User>
              <Name>{name}</Name>
            </Avatar>
            <Hr />
            <ListMenu onClick={backFunc}>
              <Svg>
                <Exit />
              </Svg>
              Logout
            </ListMenu>
          </Container>
        )}
      </div>

      <div>
        {logoutModal && (
          <ExitModal
            open={logoutModal}
            onClose={closeLogoutModal}
            logoutFunc={logoutFunc}
          ></ExitModal>
        )}
      </div>
    </div>
  );
};

export default HederMenu;
