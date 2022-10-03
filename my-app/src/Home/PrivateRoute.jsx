import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { IsAuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(IsAuthContext);
  console.log("isAuth:", isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
