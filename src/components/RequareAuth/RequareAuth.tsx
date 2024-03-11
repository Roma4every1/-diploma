import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "store/hooks/hooks";
import { ROUTE } from "routes/routes";
import { getUserInfo } from "store/selectors";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_UP} />;
};
