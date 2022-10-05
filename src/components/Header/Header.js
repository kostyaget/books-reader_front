import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectCurrentToken } from "../../redux/auth/auth";
import LogOutMenu from "./LogOutMenu";
import LogInMenu from "./LogInMenu";
import { Header } from "./Header.styled";

export default function HeaderMenu() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isToken = useSelector(selectCurrentToken);

  return (
    <>
      <Header>{isLoggedIn && isToken ? <LogInMenu /> : <LogOutMenu />}</Header>
    </>
  );
}
