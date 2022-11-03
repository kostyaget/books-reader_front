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

//     const f1=() =>{
//       console.log('F1')
//     }

//     const f2=() =>{
//       console.log('F2')
//     }

//   function someFunc() {
//     f1();
//     f2();
// }

  return (
    <div className={open && "modalMenu active" } onClick={onClose} >
      {open && (
        <Container
          onClick={(e) => e.stopPropagation()}
          id="Menu"
        >
          <Avatar>
            <User>{name?.slice(0, 1)?.toUpperCase()}</User>
            <Name>{name}</Name>
            {/* <Button onClick={onClose}>x</Button> */}
          </Avatar>
          <Hr />
          <ListMenu
            type="button"
            onClick={onClick}
            // ontoggle={someFunc()}
            // onClick={onClose}
          >
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
      </div>
  );
};

export default HederMenu;

