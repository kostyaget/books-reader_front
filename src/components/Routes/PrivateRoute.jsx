import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectCurrentToken } from "../../redux/auth/auth";

export default function PrivateRoute() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isToken = useSelector(selectCurrentToken);

  return isLoggedIn && isToken ? <Outlet /> : <Navigate to="/" />;
}
