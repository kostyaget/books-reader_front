import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/auth";
import LogOutMenu from "./LogOutMenu";
import LogInMenu from "./LogInMenu";
import { Header } from "./Header.styled";

export default function HeaderMenu() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Header>{isLoggedIn ? <LogInMenu /> : <LogOutMenu />}</Header>
    </>
  );
}
