import { useState } from "react";
import { createContext } from "react";
import { FaLaptopHouse } from "react-icons/fa";

export const CarrtContext = createContext();
const CartContext = ({ children }) => {
  const [data, setData] = useState([]);

  const toggle = (arr) => {
    setData([...data, arr]);
  };

  return (
    <CarrtContext.Provider value={{ data, toggle }}>
      {children}
    </CarrtContext.Provider>
  );
};

export default CartContext;
