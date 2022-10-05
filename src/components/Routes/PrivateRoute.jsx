import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/auth";

export default function PrivateRoute() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}
