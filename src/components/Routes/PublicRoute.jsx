import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsLoggedIn, selectCurrentToken } from "../../redux/auth/auth";

export default function PublicRoute() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isToken = useSelector(selectCurrentToken);

  return isLoggedIn && isToken ? <Navigate to="/library" /> : <Outlet />;
}
