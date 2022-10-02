import { useState } from "react";
import { createContext } from "react";
import { FaLaptopHouse } from "react-icons/fa";

export const IsAuthContext = createContext();
const AuthContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  console.log("isAuth:", isAuth);
  const toggle = (valueis) => {
    setIsAuth(valueis);
  };

  return (
    <IsAuthContext.Provider value={{ isAuth, toggle }}>
      {children}
    </IsAuthContext.Provider>
  );
};

export default AuthContext;
